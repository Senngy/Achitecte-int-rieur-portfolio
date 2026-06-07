import { projets as seedProjets } from '$lib/data/projets';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const DATA_DIR = join(process.cwd(), 'data');
const DATA_FILE = join(DATA_DIR, 'projets.json');

export type Palette = { name: string; src: string };
export type Espace = {
	titre: string;
	description: string;
	images: string[];
	plans: string[];
	coupes: string[];
	textes: string[];
};
export type Projet = {
	id: string;
	titre: string;
	slug: string;
	annee: string;
	type: string;
	surface: string;
	lieu: string;
	legende: string;
	description: string;
	tagline?: string;
	imgPres: string[];
	imgSecondaire: string[];
	plans: string[];
	palettes: Palette[];
	coupes: string[];
	images: string[];
	textes?: string[];
	espace1?: Espace;
	espace2?: Espace;
	espace3?: Espace;
};

let overrides: Record<string, Partial<Projet>> = {};

function ensureDataDir() {
	if (!existsSync(DATA_DIR)) {
		mkdirSync(DATA_DIR, { recursive: true });
	}
}

export function loadOverrides(): Record<string, Partial<Projet>> {
	ensureDataDir();
	if (!existsSync(DATA_FILE)) return {};
	try {
		return JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
	} catch {
		return {};
	}
}

export function saveOverrides(data: Record<string, Partial<Projet>>) {
	ensureDataDir();
	writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
	overrides = data;
}

export function getProjets(): Projet[] {
	overrides = loadOverrides();
	const seedSlugs = new Set(seedProjets.map(p => p.slug));
	const seeds = seedProjets.map((p) => {
		const override = overrides[p.slug];
		return override ? { ...p, ...override } as Projet : p as Projet;
	});
	const extra = Object.entries(overrides)
		.filter(([slug]) => !seedSlugs.has(slug))
		.map(([, data]) => data as Projet);
	return [...seeds, ...extra];
}

export function getProjet(slug: string): Projet | undefined {
	return getProjets().find((p) => p.slug === slug);
}

export function updateProjet(slug: string, data: Partial<Projet>) {
	overrides = loadOverrides();
	overrides[slug] = { ...(overrides[slug] || {}), ...data };
	saveOverrides(overrides);
}

export function deleteProjet(slug: string) {
	overrides = loadOverrides();
	delete overrides[slug];
	saveOverrides(overrides);
}

export function createProjet(projet: Projet) {
	overrides = loadOverrides();
	overrides[projet.slug] = projet;
	saveOverrides(overrides);
}
