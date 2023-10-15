import fs from "fs/promises";
import { GlobalThisEmbedder } from "./helpers/embed-on-server";
import { SomeClientComponent } from "./helpers/client-component";

export default async function GlobalThisPage() {
  const serverContent = (await fs.readFile("server-content.txt")).toString();

  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <GlobalThisEmbedder embedOnServer={{ content: serverContent }} />
      <h1 className="text-xl font-bold">
        The contents below are client-rendered with server-rendered content,
        WITHOUT props being passed
      </h1>

      <SomeClientComponent />
    </div>
  );
}
