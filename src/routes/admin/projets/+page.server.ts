import { getProjets } from '$lib/server/data';

export function load() {
	return { projets: getProjets() };
}
