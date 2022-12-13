import GameBoard from "../src/components/GameBoard";
import KeyboardList from "../src/components/KeyboardList";
import Loading from "../src/components/Loading";
import useWord from "../src/hooks/useWord";
import useGuessing from "../src/hooks/useGuessing";
import { useState } from "react";

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
          result={result}
          resetGame={resetGame}
        />
      )}
      <KeyboardList onSelect={handleSelect} isNewGame={isNewGame} />
    </div>
  );
};

export default GamePage;
