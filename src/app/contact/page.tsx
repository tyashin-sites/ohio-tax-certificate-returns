import LeadForm from '@/components/LeadForm';
import JsonLd from '@/components/JsonLd';
import { BUSINESS } from '@/config/site';
import { buildGraph } from '@/lib/knowledge-graph';
import { pageMetadata } from '@/lib/seo';

const TITLE = 'Contact Tax Sale Atlas';
const DESCRIPTION =
  'Send a correction or a question about the Ohio tax certificate note. Tax Sale Atlas answers by email and does not give legal or investment advice.';

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/contact' });

export default function ContactPage() {
  const apiUrl = process.env.TYASHIN_API_URL ?? '';
  const apiKey = process.env.TYASHIN_API_KEY ?? '';
  return (
    <section className="mx-auto max-w-3xl px-5 py-12">
      <JsonLd
        data={buildGraph({
          path: '/contact',
          title: TITLE,
          description: DESCRIPTION,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ],
        })}
      />
      <h1 className="font-heading text-3xl font-semibold text-ink">Contact</h1>
      <p className="mt-4 text-lg">
        Found a figure that does not match the statute, or a county that changed its sale? Tell us and we will
        check it against the source. Email{' '}
        <a href={`mailto:${BUSINESS.email}`} className="text-primary underline">
          {BUSINESS.email}
        </a>{' '}
        or use the form.
      </p>
      <p className="mt-3 text-muted">
        We cannot review a specific parcel or tell you what to bid. For that, talk to a licensed Ohio attorney.
      </p>
      <LeadForm apiUrl={apiUrl} apiKey={apiKey} email={BUSINESS.email} />
    </section>
  );
}
