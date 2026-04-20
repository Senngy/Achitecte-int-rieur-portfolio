import { sendMail } from '$lib/server/mail';
import { fail } from '@sveltejs/kit';

export function load() {
}

export const actions = {
    contact: async ({ request }) => {
        //console.log('server data from request:', request)
        const data = await request.formData();
        console.log('server data from formData:', data)
        const name = data.get('name');
        const email = data.get('email');
        const project = data.get('project');
        const message = data.get('message');
        const honeypot = data.get('website_url'); // Bot trap

        // Anti-spam silent reject
        if (honeypot) {
            console.warn('Bot detected by honeypot');
            return { success: '✅ Merci pour votre message je vous réponds dès que possible' };
        }

        const errors: Record<string, string> = {};
        
        // Regex de validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
            errors.email = 'Email invalide';
        }

        if (!name || typeof name !== 'string' || name.trim().length < 2) errors.name = 'Nom requis (2 caractères min)';
        if (!message || (typeof message === 'string' && message.trim().length < 12)) errors.message = 'Message trop court';

        if (Object.keys(errors).length > 0) {
            console.log('errors:', errors)
            return fail(400, { errors });
        }

        try {
            await sendMail({
                name: name as string,
                email: email as string,
                project: project as string,
                message: message as string
            });
            return { success: '✅ Merci pour votre message je vous réponds dès que possible' };
        } catch (e) {
            console.error('Erreur envoi mail:', e);
            return fail(500, { error: 'Une erreur est survenue lors de l’envoi du message.' });
        }
    }
};
