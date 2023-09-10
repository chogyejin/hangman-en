import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

interface Data {
  word: string;
}

export const useWord = () => {
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const router = useRouter();
  const { type } = router.query;

  const fetchWord = useCallback(async () => {
    // prevent router.query undefined.
    if (!router.isReady) {
      return;
    }

    setIsError(false);
    setIsLoading(true);
    try {
      const res = await axios.get<Data>(`/api/randomword?type=${type}`);
      if (res.status === 200) {
        setWord(res.data.word);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [router.isReady, type]);

  useEffect(() => {
    fetchWord();
  }, [fetchWord]);

  return { word, isLoading, isError, refetch: fetchWord };
};
