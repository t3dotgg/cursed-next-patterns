"use server";

const SERVER_DATA = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
];

export const getServerData = async (current?: number) => {
  const start = current ?? 0;
  const end = start + 5;

  return SERVER_DATA.slice(start, end);
};
