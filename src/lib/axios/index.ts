import axios from "axios";
import { getRandomword } from "@/lib/api/getRandomword";
import { isProperNoun } from "@/lib/utils/propertNoun";

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: { "X-Api-Key": `${process.env.API_KEY}` },
});

instance.interceptors.response.use(
  async (response) => {
    const { word } = response.data;

    if (isProperNoun(word[0])) {
      const type = response.config.url?.split("type=")[1] || "";

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
