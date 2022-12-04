import GameBoard from "../src/components/GameBoard";
import KeyboardList from "../src/components/KeyboardList";
import Loading from "../src/components/Loading";
import useWord from "../src/hooks/useWord";
import { useState } from "react";
import { hasLetter } from "../src/lib/utils/hasLetter";

const GamePage = () => {
  const { word, isLoading } = useWord();
  const [guessing, setGuessing] = useState({
    selectedLetters: "",
    count: 0,
  });

  const handleSelect = (letter: string) => {
    setGuessing((prev) => ({
      selectedLetters: prev.selectedLetters + letter,
      count: hasLetter(word, letter) ? prev.count : prev.count + 1,
    }));
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <GameBoard word={word} selectedLetters={guessing.selectedLetters} />
      )}
      <KeyboardList onSelect={handleSelect} />
    </div>
  );
};

export default GamePage;
