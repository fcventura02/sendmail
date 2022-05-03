import nodemailer from "nodemailer"
import SMTP_CONFIG from "../config/smtp"

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: true,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false
    }
});
class Mail {
    async send(req, res) {
        try {
            const { email, subject, text, html } = req.body
            const mailSent = await transporter.sendMail({
                from: `Filipe Ventura <corujadevweb@gmail.com`,
                to: [`${email}`],
                headers: {
                    priority: "high"
                },
                subject, text, html
            });
            res.status(250).json(mailSent);
        } catch (error) {
            console.log(error.message)
            res.status(400).json({ message: error.message });
        }
    }
}

export default Mail