import { error } from '@sveltejs/kit';
import { getProjet } from '$lib/server/data';

export function load({ params }) {

  const projet = getProjet(params.projet);

  if (!projet) {
    throw error(404, 'Projet introuvable');
  }

  return {
    projet
  };
}