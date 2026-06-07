import { getProjets } from '$lib/server/data';

export function load() {
	const projets = getProjets();
	return { projets, total: projets.length };
}
