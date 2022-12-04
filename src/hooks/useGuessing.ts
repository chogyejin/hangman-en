import { useEffect, useState } from "react";
import { hasLetter } from "../lib/utils/hasLetter";

const useGuessing = (word: string) => {
  const [guessing, setGuessing] = useState({
    selectedLetters: "",
    count: 0,
  });

  const handleGuessing = (letter: string) => {
    setGuessing((prev) => ({
      selectedLetters: prev.selectedLetters + letter,
      count: hasLetter(word, letter) ? prev.count : prev.count + 1,
    }));
  };

  return { guessing, handleGuessing };
};

export default useGuessing;
