import instance from "@/lib/axios";

export type Data = {
  word: string;
};

export const getRandomword = async (type: string | string[]) => {
  if (Array.isArray(type)) {
    throw new Error("There must be only one type variable");
  }
  const response = await instance.get<Data>(`/randomword?type=${type}`);

  return response;
};
