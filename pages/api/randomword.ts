import type { NextApiRequest, NextApiResponse } from "next";
import type { Data as ResponseData } from "@/lib/api/getRandomword";
import { getRandomword } from "@/lib/api/getRandomword";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const { query } = req;
  const { type = "" } = query;

  const response = await getRandomword(type);

  res.status(200).json({ word: response.data.word });
};

export default handler;
