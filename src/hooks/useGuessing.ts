import { useState } from "react";
import { MAX_COUNT } from "@/constants";
import { Count } from "@/types";

export type Result = "in-progress" | "win" | "lose";

export interface Guessing {
  selectedLetters: string;
  correctLetters: string;
  count: Count;
  result: Result;
}

const initialState: Guessing = {
  selectedLetters: "",
  correctLetters: "",
  count: 0,
  result: "in-progress",
};

export const useGuessing = (word: string) => {
  const [guessing, setGuessing] = useState<Guessing>(initialState);

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

    // nextCount is 0 ~ MAX_COUNT
    // It is "number" type, not "Count" type
    const nextCount = word.includes(letter)
      ? guessing.count
      : guessing.count + 1;

    // exclude max count
    // after this if statement, we know nextCount is "Count" type
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
      count: nextCount as Count,
    });
  };

  const resetState = () => {
    setGuessing(initialState);
  };

  return {
    guessing,
    handleSelect,
    resetState,
  };
};
