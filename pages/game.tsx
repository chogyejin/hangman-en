import { GetServerSideProps } from "next";
import GameBoard from "@/components/GameBoard";
import KeyboardList from "@/components/KeyboardList";
import { useGuessing } from "@/hooks/useGuessing";
import { useWord } from "@/hooks/useWord";
import { isValidGameType } from "@/lib/utils/gameType";

const GamePage = () => {
  const { word, isLoading, isError, refetch } = useWord();
  const { guessing, handleSelect, resetState } = useGuessing(word);

  const resetGame = () => {
    resetState();
    refetch();
  };

  return (
    <div>
      <GameBoard
        word={word}
        isLoading={isLoading}
        isError={isError}
        correctLetters={guessing.correctLetters}
        count={guessing.count}
        result={guessing.result}
        resetGame={resetGame}
      />
      <KeyboardList
        key={word}
        onSelect={handleSelect}
        result={guessing.result}
        isLoading={isLoading}
      />
    </div>
  );
};

export const getServerSideProps = (async (context) => {
  const { type } = context.query;

  if (isValidGameType(type)) {
    return { props: {} };
  }

  return {
    notFound: true,
  };
}) satisfies GetServerSideProps;

export default GamePage;
