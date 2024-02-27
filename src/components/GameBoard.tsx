import styled from "@emotion/styled";
import HangManCanvas from "@/components/HangManCanvas";
import Retry from "@/components/Retry";
import { Result } from "@/hooks/useGuessing";
import { Count } from "@/types";
import Loading from "@/components/Loading";
import Letter from "@/components/Letter";
import Button from "@/components/Button";
import Link from "next/link";

interface Props {
  word: string;
  correctLetters: string;
  result: Result;
  resetGame: () => void;
  count: Count;
  isLoading: boolean;
  isError: boolean;
}

const GameBoard = ({
  word,
  correctLetters,
  result,
  resetGame,
  count,
  isLoading,
  isError,
}: Props) => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <Container>
      <Link href={"/"} aria-label="Go back">
        <BackButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          >
            <path d="M19 12H6M12 5l-7 7 7 7" />
          </svg>
        </BackButton>
      </Link>
      <ResetButton onClick={() => resetGame()} aria-label="Reset game">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
        </svg>
      </ResetButton>
      <HangManCanvas count={count} />
      {result === "in-progress" ? (
        <div>
          {word.split("").map((letter, index) => (
            <Letter
              key={index}
              letter={letter}
              correctLetters={correctLetters}
            />
          ))}
        </div>
      ) : (
        <Retry result={result} resetGame={resetGame} word={word} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  margin-bottom: 20px;
`;

const BackButton = styled(Button)`
  position: fixed;
  top: 20px;
  left: 20px;
`;

const ResetButton = styled(Button)`
  position: fixed;
  top: 20px;
  right: 20px;
`;

export default GameBoard;
