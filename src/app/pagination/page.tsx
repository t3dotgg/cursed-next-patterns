import { DataView } from "./helpers/data-view";
import { getServerData } from "./helpers/server-data";

export default async function PaginationPage() {
  return (
    <div className="flex flex-col p-12 justify-center items-center">
      <h1 className="text-xl font-bold">
        The content below is initially server-rendered, and paginated with
        Server Actions
      </h1>
      <DataView initialData={await getServerData()} />
    </div>
  );
}
