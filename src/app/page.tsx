import Link from "next/link";

export default function Home() {
  return (
    <main className="flex gap-4 flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Cursed Next Patterns</h1>
        <a
          className="text-blue-300 underline"
          href="https://cursed-next-patterns.t3.gg"
        >
          cursed-next-patterns.t3.gg
        </a>
      </div>
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

      <div className="text-center mt-8">
        Also, check out this repo on GitHub:
        <br />
        <a
          href="https://github.com/t3dotgg/cursed-next-patterns"
          className="text-blue-300 underline"
        >
          https://github.com/t3dotgg/cursed-next-patterns
        </a>
      </div>
    </main>
  );
}
