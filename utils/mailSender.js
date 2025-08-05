const nodemailer = require('nodemailer');

// Example transporter setup (customize as needed)
const transporter = async (email, body, title) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: 'your_email@gmail.com',
                pass: 'your_email_password'
            }
        });
        const info = await transporter.sendMail({
            from: 'StudyNotion || CodeHelp - by koushik ',
            to: email,
            subject: title,
            html: body,
        });
        console.log("mail send done ", info);
    } catch (err) {
        console.log("mail sending error", err.message);
    }
};
module.exports = transporter;