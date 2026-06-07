import { redirect, type Handle } from '@sveltejs/kit';
import { COOKIE_NAME, validateSession, initAuth } from '$lib/server/auth';
import { ADMIN_EMAIL, ADMIN_PASSWORD } from '$env/static/private';
import { dev } from '$app/environment';

initAuth(ADMIN_PASSWORD);

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/admin')) {
		const isLoginPage = event.url.pathname === '/admin/login';
		const token = event.cookies.get(COOKIE_NAME);
		const user = token ? validateSession(token) : null;

		if (!user && !isLoginPage) {
			redirect(303, '/admin/login');
		}

		if (user) {
			event.locals.user = ADMIN_EMAIL;
		}
	}

	const response = await resolve(event);

	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()');
	response.headers.set('Content-Security-Policy',
		"default-src 'self'; " +
		"script-src 'self' https://cdn.tailwindcss.com 'unsafe-inline'; " +
		"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
		"font-src 'self' https://fonts.gstatic.com; " +
		"img-src 'self' data:; " +
		"connect-src 'self'; " +
		"frame-ancestors 'none'"
	);
	if (!dev) {
		response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
	}

	return response;
};
