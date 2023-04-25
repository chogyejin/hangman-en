import { useState } from "react";
import GameBoard from "../src/components/GameBoard";
import KeyboardList from "../src/components/KeyboardList";
import Loading from "../src/components/Loading";
import { useGuessing } from "../src/hooks/useGuessing";
import { useWord } from "../src/hooks/useWord";

const GamePage = () => {
  const { word, isLoading, refetch } = useWord();
  const { guessing, result, handleGuessing, reset } = useGuessing(word);
  const [isNewGame, setIsNewGame] = useState(false);

  const handleSelect = (letter: string) => {
    handleGuessing(letter);
  };

  const resetGame = () => {
    setIsNewGame((prev) => !prev);
    reset();
    refetch();
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <GameBoard
          word={word}
          correctLetters={guessing.correctLetters}
          count={guessing.count}
          result={result}
          resetGame={resetGame}
        />
      )}
      <KeyboardList
        onSelect={handleSelect}
        isNewGame={isNewGame}
        result={result}
      />
    </div>
  );
};

export default GamePage;
