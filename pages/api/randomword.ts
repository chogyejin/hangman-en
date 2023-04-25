import type { NextApiRequest, NextApiResponse } from "next";
import type {
  GameType,
  Data as ResponseData,
} from "../../src/lib/api/getRandomword";
import { getRandomword } from "../../src/lib/api/getRandomword";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const { query } = req;
  const type = query.type as GameType;

  const response = await getRandomword(type);

  res.status(200).json({ word: response.data.word });
};

export default handler;
