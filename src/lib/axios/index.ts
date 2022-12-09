import axios from "axios";
import { fetchRandomword } from "../api/randomword";
import { isProperNoun } from "../utils/check";

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: { "X-Api-Key": `${process.env.API_KEY}` },
});

instance.interceptors.response.use(
  async (response) => {
    const { word } = response.data;

    if (isProperNoun(word)) {
      const newResponse = await fetchRandomword();

      return newResponse;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
