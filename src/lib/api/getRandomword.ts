import instance from "@/lib/axios";

export type GameType = "noun" | "verb" | "adjective" | "adverb";

export type Data = {
  word: string;
};

export const getRandomword = async (type: GameType) => {
  const response = await instance.get<Data>(`/randomword?type=${type}`);

  return response;
};
