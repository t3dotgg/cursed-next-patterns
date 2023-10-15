"use client";

import { useState } from "react";
import { getServerData } from "./server-data";

export const DataView = (props: { initialData: string[] }) => {
  const [data, setData] = useState(props.initialData);

  async function loadMore() {
    const newData = await getServerData(data.length);

    setData([...data, ...newData]);
  }

  return (
    <div className="flex flex-col text-xl justify-center items-center bg-gray-800 py-4 px-20">
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <button className="border-1 p-2 hover:bg-gray-700" onClick={loadMore}>
        Load more...
      </button>
    </div>
  );
};
