import { fail, redirect } from '@sveltejs/kit';
import { createProjet, getProjets } from '$lib/server/data';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const titre = (data.get('titre') as string)?.trim();
		const slug = (data.get('slug') as string)?.trim();

		if (!titre || !slug) {
			return fail(400, { error: 'Titre et slug requis.' });
		}

		const exists = getProjets().find(p => p.slug === slug);
		if (exists) {
			return fail(400, { error: 'Ce slug existe déjà.' });
		}

		const maxId = getProjets().reduce((max, p) => Math.max(max, parseInt(p.id) || 0), 0);

		createProjet({
			id: String(maxId + 1),
			titre,
			slug,
			annee: '',
			type: '',
			surface: '',
			lieu: '',
			legende: '',
			description: '',
			tagline: '',
			imgPres: [],
			imgSecondaire: [],
			plans: [],
			palettes: [],
			coupes: [],
			images: [],
			textes: []
		});

		redirect(303, `/admin/projets/${slug}`);
	}
};
