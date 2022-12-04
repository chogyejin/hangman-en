import instance from "../../src/lib/axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  word: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await instance.get("/randomword");
  res.status(200).json({ word: response.data.word });
};

export default handler;
