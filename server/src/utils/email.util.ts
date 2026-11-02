import transporter from "../config/email.js";

interface SendEmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

const sendEmail = async ({ to, subject, text, html }: SendEmailOptions) => {
  return transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    text,
    html,
  });
};

export default sendEmail;
