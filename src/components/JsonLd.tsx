export default function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data ?? {})
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
