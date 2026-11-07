import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE, siteUrl } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl('/')),
  title: { default: `${SITE.name}: Ohio tax certificate notes`, template: `%s | ${SITE.name}` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ backgroundColor: '#f7f3e8' }}>
      <body className="bg-background text-foreground" style={{ backgroundColor: '#f7f3e8' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
