import Link from "next/link";

export default function Home() {
  return (
    <main className="flex gap-4 flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Cursed Next Patterns</h1>
      <div>Click one of the links below to hurt your brain</div>
      <ul className="list-disc text-xl space-y-4">
        <li>
          <Link className="text-blue-300 underline" href="/pagination">
            Pagination via Server Actions
          </Link>
        </li>
        <li>
          <Link className="text-blue-300 underline" href="/globalThis">
            <code>globalThis</code> as an SSR helper
          </Link>
        </li>
        <li>
          <Link className="text-blue-300 underline" href="/generators">
            <code>function*</code> for streaming component updates
          </Link>
        </li>
      </ul>
    </main>
  );
}
