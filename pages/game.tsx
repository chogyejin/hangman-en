import GameBoard from "../src/components/GameBoard";
import KeyboardList from "../src/components/KeyboardList";
import Loading from "../src/components/Loading";
import useWord from "../src/hooks/useWord";
import useGuessing from "../src/hooks/useGuessing";

const GamePage = () => {
  const { word, isLoading } = useWord();
  const { guessing, handleGuessing } = useGuessing(word);

  const handleSelect = (letter: string) => {
    handleGuessing(letter);
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
