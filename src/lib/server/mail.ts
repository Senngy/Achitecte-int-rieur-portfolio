import * as nodemailer from 'nodemailer';
import { MAIL_USER, MAIL_PASS, MAIL_TO } from '$env/static/private';

// Utilitaire pour contrer l'injection XSS
function escapeHtml(unsafe: string) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

export async function sendMail({ name, email, project, message }: { name: string; email: string; project: string; message: string }) {
	//console.log('user:', MAIL_USER);
	//console.log('pass exists:', !!MAIL_PASS);
	const transporter = nodemailer.createTransport({
		service: 'gmail', // ou smtp.mailgun.org, smtp.ionos.fr, etc.
		auth: {
			user: MAIL_USER,
			pass: MAIL_PASS
		}
	});

	const safeName = escapeHtml(name);
	const safeEmail = escapeHtml(email);
	const safeProject = escapeHtml(project || 'N/A');
	const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>'); // Preserve line breaks

	const mailOptions = {
		from: MAIL_USER,
		replyTo: safeEmail, // PERMET DE FAIRE "RÉPONDRE" CORRECTEMENT
		to: MAIL_TO, // ton adresse de réception
		subject: `Nouveau message de ${safeName}`,
		html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #444;">📩 Laëtitia vous avez un reçu un nouveau message depuis le formulaire de contact de votre site perso</h2>
      <p><strong>Nom :</strong> ${safeName}</p>
      <p><strong>Email :</strong> ${safeEmail}</p>
      <p><strong>Projet / Type de demande :</strong> ${safeProject}</p>
      <hr style="border:none; border-top:1px solid #eee; margin: 1rem 0;" />
      <p><strong>Message :</strong></p>
      <div style="padding: 0.5rem 1rem; background:#f5f5f5; border-radius: 8px;">${safeMessage}</div>
      <p style="font-size: 0.9rem; color:#888;">Envoyé depuis le portfolio de Laëtitia</p>
    </div>
  `
	};

	return transporter.sendMail(mailOptions);
}
