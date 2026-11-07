import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="font-heading text-3xl font-semibold text-ink">That page is not here</h1>
      <p className="mt-4 text-lg">
        The address may be mistyped, or the page may have moved. The Ohio certificate note is on the home page.
      </p>
      <p className="mt-6">
        <Link href="/" className="font-heading font-semibold text-primary underline">
          Go to the Ohio certificate note
        </Link>
      </p>
    </section>
  );
}
