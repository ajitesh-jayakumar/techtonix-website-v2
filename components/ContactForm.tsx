'use client';

import { useActionState, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { submitContactForm, type FormState } from '@/app/actions/contact';

const initialState: FormState = {
  success: false,
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (formData: FormData) => {
    if (captchaToken) {
      formData.append('g-recaptcha-response', captchaToken);
    }
    formAction(formData);
  };

  return (
    <form action={handleSubmit} className="space-y-4">
      {state.error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm">
          {state.error}
        </div>
      )}
      {state.success && (
        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded text-green-500 text-sm">
          {state.message}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          required
          className="w-full px-4 py-2 bg-card border border-border rounded-md focus:ring-green-500 focus:border-border text-foreground text-sm placeholder-gray-600"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required
          className="w-full px-4 py-2 bg-card border border-border rounded-md focus:ring-green-500 focus:border-border text-foreground text-sm placeholder-gray-600"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1">Message</label>
        <textarea 
          id="message" 
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 bg-card border border-border rounded-md focus:ring-green-500 focus:border-border text-foreground text-sm placeholder-gray-600"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <div className="flex justify-center overflow-hidden">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
          onChange={onCaptchaChange}
          theme="dark"
        />
      </div>

      <button 
        type="submit" 
        disabled={isPending || !captchaToken}
        className="w-full bg-primary text-foreground py-2 px-4 rounded-md hover:opacity-90 transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
