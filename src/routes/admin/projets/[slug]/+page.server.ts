import { error, fail, redirect } from '@sveltejs/kit';
import { getProjet, updateProjet, deleteProjet } from '$lib/server/data';
import { saveUpload } from '$lib/server/upload';

export function load({ params }) {
	const projet = getProjet(params.slug);
	if (!projet) error(404, 'Projet introuvable');
	return { projet };
}

function fileField(form: FormData, name: string): File | null {
	const f = form.get(name);
	return f instanceof File ? f : null;
}

async function uploadAndPrepend(file: File | null, slug: string, prefix: string, existing: string[]): Promise<string[]> {
	const uploaded = await saveUpload(file, slug, prefix);
	if (uploaded) return [uploaded, ...existing];
	return existing;
}

export const actions = {
	default: async ({ request, params }) => {
		const projet = getProjet(params.slug);
		if (!projet) error(404, 'Projet introuvable');

		const form = await request.formData();
		const action = form.get('action') as string;

		if (action === 'delete') {
			deleteProjet(params.slug);
			redirect(303, '/admin/projets');
		}

		const parseLines = (val: FormDataEntryValue | null): string[] =>
			typeof val === 'string' ? val.split('\n').map(s => s.trim()).filter(Boolean) : [];

		const parsePalettes = (val: FormDataEntryValue | null) =>
			parseLines(val).map(line => {
				const [name = '', src = ''] = line.split('|');
				return { name: name.trim(), src: src.trim() };
			});

		const textesRaw = form.get('textes');
		const textes = typeof textesRaw === 'string'
			? textesRaw.split('\n---\n').map(s => s.trim()).filter(Boolean)
			: [];

		const slug = (form.get('slug') as string) || projet.slug;

		const imgPresPaths = await uploadAndPrepend(fileField(form, 'imgPres_file'), slug, 'pres', parseLines(form.get('imgPres')));
		const imgSecondairePaths = await uploadAndPrepend(fileField(form, 'imgSecondaire_file'), slug, 'sec', parseLines(form.get('imgSecondaire')));
		const plansPaths = await uploadAndPrepend(fileField(form, 'plans_file'), slug, 'plan', parseLines(form.get('plans')));
		const coupesPaths = await uploadAndPrepend(fileField(form, 'coupes_file'), slug, 'coupe', parseLines(form.get('coupes')));
		const imagesPaths = await uploadAndPrepend(fileField(form, 'images_file'), slug, 'gal', parseLines(form.get('images')));

		let palettes = parsePalettes(form.get('palettes'));
		const palFile = fileField(form, 'palettes_file');
		if (palFile && palFile.size > 0) {
			const palPath = await saveUpload(palFile, slug, 'mat');
			if (palPath) {
				palettes.push({ name: palFile.name.replace(/\.[^/.]+$/, ''), src: palPath });
			}
		}

		const parseEspace = (prefix: string) => {
			const titre = form.get(`${prefix}_titre`) as string;
			if (!titre?.trim()) return undefined;
			const rawTextes = form.get(`${prefix}_textes`);
			return {
				titre: titre.trim(),
				description: (form.get(`${prefix}_description`) as string) || '',
				images: parseLines(form.get(`${prefix}_images`)),
				plans: parseLines(form.get(`${prefix}_plans`)),
				coupes: parseLines(form.get(`${prefix}_coupes`)),
				textes: typeof rawTextes === 'string'
					? rawTextes.split('\n---\n').map(s => s.trim()).filter(Boolean)
					: []
			};
		};

		updateProjet(params.slug, {
			titre: (form.get('titre') as string) || projet.titre,
			slug,
			type: (form.get('type') as string) || '',
			annee: (form.get('annee') as string) || '',
			surface: (form.get('surface') as string) || '',
			lieu: (form.get('lieu') as string) || '',
			legende: (form.get('legende') as string) || '',
			description: (form.get('description') as string) || '',
			tagline: (form.get('tagline') as string) || '',
			imgPres: imgPresPaths,
			imgSecondaire: imgSecondairePaths,
			plans: plansPaths,
			coupes: coupesPaths,
			images: imagesPaths,
			palettes,
			textes,
			espace1: parseEspace('espace1'),
			espace2: parseEspace('espace2'),
			espace3: parseEspace('espace3')
		});

		return { success: 'Projet mis à jour.' };
	}
};
