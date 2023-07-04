import GameBoard from "../src/components/GameBoard";
import KeyboardList from "../src/components/KeyboardList";
import Loading from "../src/components/Loading";
import { useGuessing } from "../src/hooks/useGuessing";
import { useWord } from "../src/hooks/useWord";

const GamePage = () => {
  const { word, isLoading, refetch } = useWord();
  const { guessing, result, handleGuessing, reset } = useGuessing(word);

  const handleSelect = (letter: string) => {
    handleGuessing(letter);
  };

  const resetGame = () => {
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
      <KeyboardList key={word} onSelect={handleSelect} result={result} />
    </div>
  );
};

export default GamePage;
