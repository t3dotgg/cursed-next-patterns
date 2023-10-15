import { useId } from "react";
import { useServerInsertedHTML } from "next/navigation";

type ServerSideContent = {
  content: string;
};

declare const globalThis: {
  __SERVER_CONTENT?: ServerSideContent;
};

export function GlobalThisEmbedder(props: {
  embedOnServer: { content: string };
}) {
  const id = useId();

  // Set __SERVER_CONTENT on server globalThis
  globalThis.__SERVER_CONTENT ??= props.embedOnServer;

  useServerInsertedHTML(() => {
    const html = [
      // Hydrate __SERVER_CONTENT on client globalThis
      `globalThis.__SERVER_CONTENT ??= ${JSON.stringify(props.embedOnServer)};`,
    ];

    return (
      <script key={id} dangerouslySetInnerHTML={{ __html: html.join("") }} />
    );
  });

  return null;
}
