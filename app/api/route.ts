'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = data;
  const { GMAIL_USERNAME, GMAIL_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USERNAME,
      pass: GMAIL_PASSWORD
    },
    port: 465,
    host: 'smtp.gmail.com',
    secure: true
  });

  try {
    await transporter.sendMail({
      from: GMAIL_USERNAME,
      to: 'usluge.ciscenja.petricevic@gmail.com',
      subject: `New message from ${name}. The sender's email address is: ${email} `,
      text: message,
      replyTo: email
    });

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, message: 'Failed to send email.' };
  }
}
