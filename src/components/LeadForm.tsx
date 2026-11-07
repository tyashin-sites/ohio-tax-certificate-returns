'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { apiUrl?: string; apiKey?: string; email?: string };

export default function LeadForm({ apiUrl = '', apiKey = '', email = '' }: Props) {
  const renderedAt = useRef<number>(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error' | 'limit'>('idle');

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  const disabled = !apiUrl || !apiKey;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (disabled) return;
    const form = new FormData(e.currentTarget);
    setStatus('sending');
    try {
      const res = await fetch(`${apiUrl.replace(/\/+$/, '')}/api/v1/contact/public/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _apiKey: apiKey,
          name: String(form.get('name') ?? ''),
          email: String(form.get('email') ?? ''),
          message: String(form.get('message') ?? ''),
          pageUrl: window.location.href,
          source: 'contact-form',
          company_website: String(form.get('company_website') ?? ''),
          renderedAt: renderedAt.current,
        }),
      });
      if (res.status === 429) setStatus('limit');
      else if (res.ok) setStatus('sent');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4 font-heading">
      {disabled && (
        <p className="text-sm text-muted">The form is switched off in this preview. Email us instead.</p>
      )}
      <div>
        <label htmlFor="lead-name" className="block text-sm font-semibold">
          Name
        </label>
        <input id="lead-name" name="name" required maxLength={100} className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2" />
      </div>
      <div>
        <label htmlFor="lead-email" className="block text-sm font-semibold">
          Email
        </label>
        <input id="lead-email" name="email" type="email" required className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2" />
      </div>
      <div>
        <label htmlFor="lead-message" className="block text-sm font-semibold">
          Message
        </label>
        <textarea id="lead-message" name="message" rows={5} maxLength={5000} className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2" />
      </div>
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px' }}>
        <label htmlFor="lead-company-website">Leave this empty</label>
        <input id="lead-company-website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        disabled={disabled || status === 'sending'}
        className="rounded-md bg-primary px-5 py-2 font-semibold text-primary-contrast disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending' : 'Send message'}
      </button>
      <p aria-live="polite" className="text-sm">
        {status === 'sent' && 'Thanks. Your message reached us.'}
        {status === 'error' && 'That did not go through. Please email us instead.'}
        {status === 'limit' && `The form is full for this month. Please email ${email}.`}
      </p>
    </form>
  );
}
