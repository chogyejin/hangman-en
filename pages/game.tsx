import { GetServerSideProps } from "next";
import GameBoard from "@/components/GameBoard";
import KeyboardList from "@/components/KeyboardList";
import Loading from "@/components/Loading";
import { useGuessing } from "@/hooks/useGuessing";
import { useWord } from "@/hooks/useWord";

export const getServerSideProps = (async (context) => {
  const { type } = context.query;

  if (
    type === "noun" ||
    type === "verb" ||
    type === "adjective" ||
    type === "adverb"
  ) {
    return { props: {} };
  }

  return {
    notFound: true,
  };
}) satisfies GetServerSideProps;

const GamePage = () => {
  const { word, isLoading, isError, refetch } = useWord();
  const { guessing, handleSelect, resetState } = useGuessing(word);

  const resetGame = () => {
    resetState();
    refetch();
  };

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <GameBoard
          word={word}
          correctLetters={guessing.correctLetters}
          count={guessing.count}
          result={guessing.result}
          resetGame={resetGame}
        />
      )}
      <KeyboardList
        key={word}
        onSelect={handleSelect}
        result={guessing.result}
      />
    </div>
  );
};

export default GamePage;
