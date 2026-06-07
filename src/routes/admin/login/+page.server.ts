import { fail, redirect } from '@sveltejs/kit';
import { ADMIN_EMAIL } from '$env/static/private';
import { handleLogin, getCookieOptions, COOKIE_NAME } from '$lib/server/auth';

const attempts = new Map<string, { count: number; resetAt: number }>();

export const actions = {
	default: async ({ request, cookies, getClientAddress }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		const ip = getClientAddress();
		const now = Date.now();
		const entry = attempts.get(ip);

		if (entry && entry.count >= 5) {
			if (now < entry.resetAt) {
				return fail(429, { error: 'Trop de tentatives. Réessayez dans 15 minutes.' });
			}
			attempts.delete(ip);
		}

		if (!email || !password) {
			return fail(400, { error: 'Email et mot de passe requis.' });
		}

		const token = handleLogin(email, password);

		if (!token || email !== ADMIN_EMAIL) {
			const current = attempts.get(ip) || { count: 0, resetAt: now + 15 * 60 * 1000 };
			current.count += 1;
			current.resetAt = now + 15 * 60 * 1000;
			attempts.set(ip, current);
			return fail(401, { error: 'Identifiants incorrects.' });
		}

		cookies.set(COOKIE_NAME, token, getCookieOptions());
		attempts.delete(ip);
		redirect(303, '/admin');
	}
};
