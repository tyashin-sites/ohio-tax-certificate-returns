import Link from 'next/link';
import { BUSINESS } from '@/config/site';

const NAV = [
  { href: '/', label: 'Ohio certificate math' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link href="/" className="font-heading text-lg font-semibold text-ink">
          {BUSINESS.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-5 font-heading text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
