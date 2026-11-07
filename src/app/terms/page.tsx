import JsonLd from '@/components/JsonLd';
import { BUSINESS } from '@/config/site';
import { buildGraph } from '@/lib/knowledge-graph';
import { pageMetadata } from '@/lib/seo';

const TITLE = 'Terms of use';
const DESCRIPTION =
  'Terms for the Tax Sale Atlas Ohio note site. The content is general information about Ohio statutes, not legal, tax or investment advice.';

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/terms' });

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12">
      <JsonLd
        data={buildGraph({
          path: '/terms',
          title: TITLE,
          description: DESCRIPTION,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Terms', path: '/terms' },
          ],
        })}
      />
      <h1 className="font-heading text-3xl font-semibold text-ink">Terms of use</h1>
      <div className="mt-6 space-y-4 text-lg">
        <p>
          {BUSINESS.name} publishes this site as general information about Ohio tax certificate law. It is not
          legal, tax or investment advice, and reading it does not create an attorney or advisor relationship.
        </p>
        <p>
          Statutes and county procedures change. Check the current statute text and the county treasurer before
          you act, and talk to a licensed Ohio attorney about a specific parcel.
        </p>
        <p>
          You may quote or link to this site with credit to {BUSINESS.name}. We are not responsible for losses
          from decisions based on it.
        </p>
        <p>
          Questions go to{' '}
          <a href={`mailto:${BUSINESS.email}`} className="text-primary underline">
            {BUSINESS.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
