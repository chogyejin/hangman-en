import { useEffect, useState } from "react";
import { MAX_COUNT } from "../constants";

const useGuessing = (word: string) => {
  const [guessing, setGuessing] = useState({
    selectedLetters: "",
    correctLetters: "",
    count: 0,
  });
  const [isEnd, setIsEnd] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const handleGuessing = (letter: string) => {
    setGuessing((prev) => ({
      ...prev,
      selectedLetters: prev.selectedLetters + letter,
      count: word.includes(letter) ? prev.count : prev.count + 1,
    }));
  };

  const reset = () => {
    setGuessing({
      selectedLetters: "",
      correctLetters: "",
      count: 0,
    });
    setIsEnd(false);
    setIsAnswer(false);
  };

  useEffect(() => {
    setGuessing((prev) => ({
      ...prev,
      correctLetters: word
        .split("")
        .map((char) => (guessing.selectedLetters.includes(char) ? char : "_"))
        .join(""),
    }));
  }, [guessing.selectedLetters, word]);

  useEffect(() => {
    if (guessing.count === MAX_COUNT) {
      setIsEnd(true);
    }
  }, [guessing.count]);

  useEffect(() => {
    if (word && guessing.correctLetters === word) {
      setIsAnswer(true);
    }
  }, [guessing.correctLetters, word]);

  return { guessing, handleGuessing, isEnd, isAnswer, reset };
};

export default useGuessing;
