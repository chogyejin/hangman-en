import { useEffect, useState } from "react";
import { MAX_COUNT } from "../constants";
import { hasLetter } from "../lib/utils/hasLetter";

const useGuessing = (word: string) => {
  const [guessing, setGuessing] = useState({
    selectedLetters: "",
    count: 0,
  });
  const [isEnd, setIsEnd] = useState(false);

  const handleGuessing = (letter: string) => {
    setGuessing((prev) => ({
      selectedLetters: prev.selectedLetters + letter,
      count: hasLetter(word, letter) ? prev.count : prev.count + 1,
    }));
  };

  useEffect(() => {
    if (guessing.count === MAX_COUNT) {
      setIsEnd(true);
    }
  }, [guessing.count]);

  return { guessing, handleGuessing, isEnd };
};

export default useGuessing;
