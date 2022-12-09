import type { NextApiRequest, NextApiResponse } from "next";
import { fetchRandomword } from "../../src/lib/api/randomword";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetchRandomword();
  res.status(200).json({ word: response.data.word });
};

export default handler;
