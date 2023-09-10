import axios from "axios";
import { GameType, getRandomword } from "@/lib/api/getRandomword";
import { isProperNoun } from "@/lib/utils/check";

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: { "X-Api-Key": `${process.env.API_KEY}` },
});

instance.interceptors.response.use(
  async (response) => {
    const { word } = response.data;

    if (isProperNoun(word)) {
      const type = response.config.url?.split("type=")[1] as GameType;

      const newResponse = await getRandomword(type);

      return newResponse;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
