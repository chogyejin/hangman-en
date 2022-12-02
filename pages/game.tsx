import GameBoard from "../src/components/GameBoard";
import KeyboardList from "../src/components/KeyboardList";
import Loading from "../src/components/Loading";
import useWord from "../src/hooks/useWord";

const GamePage = () => {
  const { word, isLoading } = useWord();
  console.log(word);

  return (
    <div>
      {isLoading ? <Loading /> : <GameBoard word={word} />}
      <KeyboardList />
    </div>
  );
};

export default GamePage;
