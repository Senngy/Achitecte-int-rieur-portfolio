import { sendMail } from '$lib/server/mail';
import { fail } from '@sveltejs/kit';

export function load() {
}

export const actions = {
    contact: async ({ request }) => {
        const data = await request.formData();
        console.log('server data from formData:', data)
        const name = data.get('name');
        const email = data.get('email');
        const company = data.get('company');
        const message = data.get('message');

        const errors: Record<string, string> = {};
        if (!email) errors.email = 'Email requis';
        if (!name) errors.name = 'Nom requis';
        if (!message || (typeof message === 'string' && message.length < 12)) errors.message = 'Message trop court';

        if (Object.keys(errors).length > 0) { 
            return fail(400, { errors });
        }

        try {
            await sendMail({ 
                name: name as string, 
                email: email as string, 
                company: company as string, 
                message: message as string 
            });
            return { success: '✅ Merci pour votre message je vous réponds dès que possible'};
        } catch (e) {
            console.error('Erreur envoi mail:', e);
            return fail(500, { error: 'Une erreur est survenue lors de l’envoi du message.' });
        }
    }
};
