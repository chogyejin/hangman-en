import { useState } from "react";
import { MAX_COUNT } from "@/constants";

export type Result = "In Progress" | "win" | "lose";

export interface Guessing {
  selectedLetters: string;
  correctLetters: string;
  count: number;
  result: Result;
}

export const useGuessing = (word: string) => {
  const [guessing, setGuessing] = useState<Guessing>({
    selectedLetters: "",
    correctLetters: "",
    count: 0,
    result: "In Progress",
  });

  // character click event handler
  const handleSelect = (letter: string) => {
    const nextSelectedLetters = guessing.selectedLetters + letter;

    const nextCorrectLetters = word
      .split("")
      .map((char) => (nextSelectedLetters.includes(char) ? char : "_"))
      .join("");
    if (nextCorrectLetters === word) {
      setGuessing({
        ...guessing,
        result: "win",
      });
      return;
    }

    const nextCount = word.includes(letter)
      ? guessing.count
      : guessing.count + 1;
    if (nextCount === MAX_COUNT) {
      setGuessing({
        ...guessing,
        result: "lose",
      });
      return;
    }

    setGuessing({
      ...guessing,
      selectedLetters: nextSelectedLetters,
      correctLetters: nextCorrectLetters,
      count: nextCount,
    });
  };

  const resetState = () => {
    setGuessing({
      selectedLetters: "",
      correctLetters: "",
      count: 0,
      result: "In Progress",
    });
  };

  return {
    guessing,
    handleSelect,
    resetState,
  };
};
