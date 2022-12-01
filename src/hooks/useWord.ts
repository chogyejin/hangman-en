import { useEffect, useState } from "react";
import axios from "../lib/axios";

interface Data {
  word: string;
}

const useWord = () => {
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchWord = async () => {
      try {
        const res = await axios.get<Data>("/api/randomword");
        console.log(res);
        if (res.status === 200) {
          setWord(res.data.word);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWord();
  }, []);

  return { word, isLoading };
};

export default useWord;
