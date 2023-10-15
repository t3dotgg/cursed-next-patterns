"use client";

// Put these typedefs in a d.ts if you actually use this pattern
export type ServerSideContent = {
  content: string;
};
declare const globalThis: {
  __SERVER_CONTENT?: ServerSideContent;
};

export const SomeClientComponent = () => {
  const content =
    globalThis.__SERVER_CONTENT?.content ?? "content was not loaded :(";

  return <div>{content}</div>;
};
