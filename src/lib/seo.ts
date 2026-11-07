import type { Metadata } from 'next';

export const SITE = {
  name: 'Tax Sale Atlas',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'ohio-tax-certificate-returns.sites.tyashin.com',
  defaultOgImage: '/og.svg',
  locale: 'en_US',
};

export function siteUrl(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `https://${SITE.domain}${clean}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
};

export function pageMetadata({ title, description, path, image, type = 'website' }: PageMetaInput): Metadata {
  const url = siteUrl(path);
  const img = siteUrl(image ?? SITE.defaultOgImage);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type,
      locale: SITE.locale,
      images: [{ url: img }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [img] },
  };
}
