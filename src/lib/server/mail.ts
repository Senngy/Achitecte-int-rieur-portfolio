import * as nodemailer from 'nodemailer';
import { MAIL_USER, MAIL_PASS, MAIL_TO } from '$env/static/private';

export async function sendMail({ name, email, company, message }: { name: string; email: string; company: string; message: string }) {
	//console.log('user:', MAIL_USER);
	//console.log('pass exists:', !!MAIL_PASS);
	const transporter = nodemailer.createTransport({
		service: 'gmail', // ou smtp.mailgun.org, smtp.ionos.fr, etc.
		auth: {
			user: MAIL_USER,
			pass: MAIL_PASS
		}
	});

	const mailOptions = {
		from: MAIL_USER,
		to: MAIL_TO, // ton adresse de réception
		subject: `Nouveau message de ${name}`,
		html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #444;">📩 Laëtitia vous avez un reçu un nouveau message depuis le formulaire de contact de votre site perso</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Société :</strong> ${company || 'N/A'}</p>
      <hr style="border:none; border-top:1px solid #eee; margin: 1rem 0;" />
      <p><strong>Message :</strong></p>
      <p style="padding: 0.5rem 1rem; background:#f5f5f5; border-radius: 8px;">${message}</p>
      <p style="font-size: 0.9rem; color:#888;">Envoyé depuis le portfolio de Laëtitia</p>
    </div>
  `
	};

	return transporter.sendMail(mailOptions);
}
