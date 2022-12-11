import { useEffect, useState } from "react";
import axios from "../lib/axios";

interface Data {
  word: string;
}

const useWord = () => {
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchWord = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get<Data>("/api/randomword");
      if (res.status === 200) {
        setWord(res.data.word);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  return { word, isLoading, refetch: fetchWord };
};

export default useWord;
