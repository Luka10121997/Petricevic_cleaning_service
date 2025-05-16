'use server'; // Marks this as a Server Action

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const { GMAIL_USERNAME, GMAIL_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USERNAME,
      pass: GMAIL_PASSWORD
    },
    port: 3000,
    host: 'smtp.gmail.com'
  });
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: 'luka.petricevic97@gmail.com', // Replace with your desired recipient
      subject: `New message from ${name}`,
      text: message?.toString() || '',
      replyTo: email?.toString() || ''
    });
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to send email.' };
  }
}