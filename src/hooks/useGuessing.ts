import { useEffect, useState } from "react";
import { MAX_COUNT } from "../constants";

export type Result = {
  isLose: boolean;
  isWin: boolean;
};

export const useGuessing = (word: string) => {
  const [guessing, setGuessing] = useState({
    selectedLetters: "",
    correctLetters: "",
    count: 0,
  });
  const [result, setResult] = useState<Result>({
    isLose: false,
    isWin: false,
  });

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
    setResult({
      isLose: false,
      isWin: false,
    });
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
      setResult((prev) => ({
        ...prev,
        isLose: true,
      }));
    }
  }, [guessing.count]);

  useEffect(() => {
    if (word && guessing.correctLetters === word) {
      setResult((prev) => ({
        ...prev,
        isWin: true,
      }));
    }
  }, [guessing.correctLetters, word]);

  return {
    guessing,
    result,
    handleGuessing,
    reset,
  };
};
