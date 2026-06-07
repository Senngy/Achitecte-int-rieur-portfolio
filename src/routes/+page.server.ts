import { sendMail } from '$lib/server/mail';
import { fail } from '@sveltejs/kit';
import { getProjets } from '$lib/server/data';
import { blockedDomains } from '$lib/server/blocked-domains';

export function load() {
    return {
        projets: getProjets().map(({ id, titre, slug, annee, type, surface, lieu, legende, imgPres }) => ({
            id,
            titre,
            slug,
            annee,
            type,
            surface,
            lieu,
            legende,
            imgPres
        }))
    };
}

const contactLimiter = new Map<string, { count: number; resetAt: number }>();

export const actions = {
    contact: async ({ request, getClientAddress }) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const project = data.get('project');
        const message = data.get('message');
        const honeypot = data.get('website_url');

        if (honeypot) {
            return { success: 'Merci pour votre message je vous réponds dès que possible' };
        }

        const ip = getClientAddress();
        const now = Date.now();
        const entry = contactLimiter.get(ip);

        if (entry && entry.count >= 3) {
            if (now < entry.resetAt) {
                return fail(429, { error: 'Trop de demandes. Réessayez plus tard.' });
            }
            contactLimiter.delete(ip);
        }

        const rateEntry = contactLimiter.get(ip) || { count: 0, resetAt: now + 15 * 60 * 1000 };
        rateEntry.count += 1;
        rateEntry.resetAt = now + 15 * 60 * 1000;
        contactLimiter.set(ip, rateEntry);

        const errors: Record<string, string> = {};

        // Regex de validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
            errors.email = 'Email invalide';
        } else {
            // Vérification des domaines indésirables SEULEMENT si l'email a l'air valide
            const emailDomain = email.split('@')[1]?.toLowerCase();
            const isBlocked = blockedDomains.some(domain =>
                emailDomain === domain.toLowerCase() || emailDomain.endsWith(`.${domain.toLowerCase()}`)
            );

            if (isBlocked) {
                console.warn(`Blocked spam domain: ${emailDomain}`);
                // On simule une réussite pour décourager les bots qui regardent les codes d'erreur
                return { success: 'Merci pour votre message je vous réponds dès que possible' };
            }
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
            return { success: 'Merci pour votre message je vous réponds dès que possible' };
        } catch (e) {
            console.error('Erreur envoi mail:', e);
            return fail(500, { error: 'Une erreur est survenue lors de l’envoi du message.' });
        }
    }
};
