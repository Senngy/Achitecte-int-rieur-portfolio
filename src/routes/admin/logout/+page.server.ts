import { redirect } from '@sveltejs/kit';
import { COOKIE_NAME } from '$lib/server/auth';

export function load({ cookies }) {
	cookies.delete(COOKIE_NAME, { path: '/' });
	redirect(303, '/admin/login');
}
