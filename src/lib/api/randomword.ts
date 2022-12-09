import instance from "../axios";

export type Data = {
  word: string;
};

export const fetchRandomword = async () => {
  const response = await instance.get<Data>("/randomword");

  return response;
};
