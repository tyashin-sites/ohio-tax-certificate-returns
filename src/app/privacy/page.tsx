import JsonLd from '@/components/JsonLd';
import { BUSINESS } from '@/config/site';
import { buildGraph } from '@/lib/knowledge-graph';
import { pageMetadata } from '@/lib/seo';

const TITLE = 'Privacy policy';
const DESCRIPTION =
  'How the Tax Sale Atlas Ohio note site handles data: hosting by Tyashin, privacy-respecting analytics, and contact form messages kept to reply to you.';

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/privacy' });

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12">
      <JsonLd
        data={buildGraph({
          path: '/privacy',
          title: TITLE,
          description: DESCRIPTION,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Privacy', path: '/privacy' },
          ],
        })}
      />
      <h1 className="font-heading text-3xl font-semibold text-ink">Privacy policy</h1>
      <div className="mt-6 space-y-4 text-lg">
        <p>{BUSINESS.name} runs this site. It is hosted by Tyashin.</p>
        <p>
          The site uses privacy-respecting analytics provided by the host to count page views. We do not run
          advertising trackers here, and we do not sell personal data.
        </p>
        <p>
          If you send a message through the contact form, {BUSINESS.name} stores it through Tyashin so we can
          reply to your enquiry. That includes the name, email address and message you enter.
        </p>
        <p>
          To ask about or delete a message you sent, email{' '}
          <a href={`mailto:${BUSINESS.email}`} className="text-primary underline">
            {BUSINESS.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
