const nodemailer = require("nodemailer");

const EmailSend = async (EmailTo, verificationCode, EmailSubject) => {
  let transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    tls: { rejectUnauthorized: false },
  });



  const emailHTML = `
    <div style="font-family: 'Arial, sans-serif'; color: #333;">
      <div style="padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
        <h2 style="color: #0056b3;">Top Solid Token Account Verification</h2>
        <p>Hello,</p>
        <p style="margin-bottom: 20px;">
          Thank you for signing up with Top Solid Token. To activate your account, please copy the
          verification code below and enter it in the verification field:
        </p>
        <div style="margin-bottom: 20px; background-color: #ffffff; padding: 10px; border-radius: 5px;">
          <strong>${verificationCode}</strong>
        </div>
        <p>Thank you for using Top Solid Token.</p>
        <p>Best regards,</p>
        <p>Top Solid Token Team</p>
      </div>
    </div>
  `;

  let mailOption = {
    from: `Top Solid Token <${process.env.SMTP_USER}>`,
    to: EmailTo,
    subject: EmailSubject,
    html: emailHTML,
  };

  return await transport.sendMail(mailOption);
};

module.exports = EmailSend;
