import { BUSINESS } from '@/config/site';
import { siteUrl } from '@/lib/seo';

type Crumb = { name: string; path: string };

export function buildGraph(opts: { path: string; title: string; description: string; crumbs?: Crumb[] }) {
  const origin = siteUrl('/').replace(/\/$/, '');
  const crumbs = opts.crumbs ?? [];
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      name: BUSINESS.name,
      url: BUSINESS.mainSite,
      email: BUSINESS.email,
      description: BUSINESS.description,
      sameAs: [BUSINESS.mainSite],
    },
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: siteUrl('/'),
      name: `${BUSINESS.name}: Ohio tax certificate notes`,
      publisher: { '@id': `${origin}/#organization` },
      inLanguage: 'en',
    },
  ];
  if (opts.path !== '/') {
    graph.push({
      '@type': 'WebPage',
      '@id': `${siteUrl(opts.path)}#webpage`,
      url: siteUrl(opts.path),
      name: opts.title,
      description: opts.description,
      isPartOf: { '@id': `${origin}/#website` },
    });
  } else {
    graph.push({
      '@type': 'Article',
      '@id': `${siteUrl('/')}#article`,
      headline: opts.title,
      description: opts.description,
      url: siteUrl('/'),
      inLanguage: 'en',
      author: { '@id': `${origin}/#organization` },
      publisher: { '@id': `${origin}/#organization` },
      isPartOf: { '@id': `${origin}/#website` },
    });
  }
  if (crumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: siteUrl(c.path),
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
