import JsonLd from '@/components/JsonLd';
import { NOTE_BLOCKS, NOTE_TITLE, type Seg } from '@/content/note';
import { buildGraph } from '@/lib/knowledge-graph';
import { pageMetadata } from '@/lib/seo';

const TITLE = 'Ohio Tax Certificate Returns: 6% Floor and 0% Bids';
const DESCRIPTION =
  'How an Ohio tax certificate bid turns into a return: the 18 percent opening rate, the 6 percent minimum, the 0 percent bid and the foreclosure clock.';

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/', type: 'article' });

function Inline({ segs = [] }: { segs?: Seg[] }) {
  return (
    <>
      {segs.map((s, i) =>
        s.href ? (
          <a key={i} href={s.href}>
            {s.t}
          </a>
        ) : (
          <span key={i}>{s.t}</span>
        ),
      )}
    </>
  );
}

export default function HomePage() {
  const blocks = NOTE_BLOCKS ?? [];
  return (
    <article className="note mx-auto max-w-3xl px-5 py-12">
      <JsonLd data={buildGraph({ path: '/', title: NOTE_TITLE, description: DESCRIPTION })} />
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">Ohio tax certificates</p>
      <h1 className="mt-2 font-heading text-3xl font-semibold leading-tight text-ink md:text-4xl">{NOTE_TITLE}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed">
        {blocks.map((b, i) => {
          if (b.type === 'h2')
            return (
              <h2 key={i} className="pt-6 text-2xl font-semibold text-ink">
                {b.text}
              </h2>
            );
          if (b.type === 'p')
            return (
              <p key={i}>
                <Inline segs={b.segs} />
              </p>
            );
          if (b.type === 'table')
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full border-collapse font-heading text-base">
                  <thead>
                    <tr>
                      {(b.head ?? []).map((h, j) => (
                        <th key={j} className="border-b-2 border-border px-3 py-2 text-left">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(b.rows ?? []).map((r, j) => (
                      <tr key={j}>
                        {(r ?? []).map((c, k) => (
                          <td key={k} className="border-b border-border px-3 py-2">
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 text-base">
              {(b.items ?? []).map((it, j) => (
                <li key={j}>
                  <Inline segs={it} />
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </article>
  );
}
