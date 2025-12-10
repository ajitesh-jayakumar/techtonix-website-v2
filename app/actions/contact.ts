'use server'

import { Resend } from 'resend';
import { headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success: boolean;
  error?: string;
  message?: string;
};

export async function submitContactForm(prevState: FormState, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  // Let's assume the client appends the token to formData with key 'g-recaptcha-response'
  const recaptchaToken = formData.get('g-recaptcha-response') as string;

  if (!name || !email || !message || !recaptchaToken) {
    return { success: false, error: 'Missing fields or captcha' };
  }

  try {
    // Verify reCAPTCHA
    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      console.error('ReCAPTCHA failed:', recaptchaData);
      return { success: false, error: 'Invalid reCAPTCHA' };
    }

    // Get IP and Location
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || 'Unknown IP';
    const city = headersList.get('x-vercel-ip-city') || 'Unknown City';
    const country = headersList.get('x-vercel-ip-country') || 'Unknown Country';
    const location = `${city}, ${country}`;

    // 1. Send acknowledgment email to user
    await resend.emails.send({
      from: 'Team TechTonix <hello@mail.teamtechtonix.online>',
      to: email,
      subject: 'Thanks for stopping by!',
      html: `<p>Hi ${name},</p><p>Thanks for showing interest and stopping by. We will revert back to you shortly.</p><p>Best,<br>Team Techtonix</p>`,
    });

    // 2. Send notification email to team
    await resend.emails.send({
      from: 'Team TechTonix <hello@mail.teamtechtonix.online>',
      to: 'teamtechtonix@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p><strong>IP:</strong> ${ip}</p>
        <p><strong>Location:</strong> ${location}</p>
      `,
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
