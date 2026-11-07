import Link from 'next/link';
import { BUSINESS } from '@/config/site';

const LINKS = [
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-8 font-heading text-sm text-muted">
        <p>
          {BUSINESS.name} publishes free reference notes on county tax sales. The full state and county
          guides live at{' '}
          <a href={BUSINESS.mainSite} className="underline hover:text-primary">
            taxsaleatlas.com
          </a>
          .
        </p>
        <ul className="mt-4 flex flex-wrap gap-5">
          {LINKS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs">
          Powered by{' '}
          <a href="https://tyashin.com" target="_blank" rel="noopener">
            Tyashin
          </a>
        </p>
      </div>
    </footer>
  );
}
