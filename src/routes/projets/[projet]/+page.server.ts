import { error } from '@sveltejs/kit';
import { projets } from '$lib/data/projets';

export function load({ params }) {

  const projet = projets.find(
    (p) => p.slug === params.projet
  );

  if (!projet) {
    throw error(404, 'Projet introuvable');
  }

  return {
    projet
  };
}