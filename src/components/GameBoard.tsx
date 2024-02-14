import styled from "@emotion/styled";
import { useRouter } from "next/router";
import HangManCanvas from "@/components/HangManCanvas";
import Letter from "@/components/Letter";
import Retry from "@/components/Retry";
import { Result } from "@/hooks/useGuessing";
import Loading from "@/components/Loading";
import { Count } from "@/types";

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
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <Container>
      <BackButton onClick={handleBackClick}>
        <span>&#8592;</span>
      </BackButton>
      <HangManCanvas count={count} />
      {result === "in-progress" ? (
        <LetterList>
          {word.split("").map((letter, index) => (
            <li key={index}>
              <Letter letter={letter} correctLetters={correctLetters} />
            </li>
          ))}
        </LetterList>
      ) : (
        <Retry result={result} resetGame={resetGame} word={word} />
      )}
      <ResetButton onClick={resetGame}>
        <span>&#8635;</span>
      </ResetButton>
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

const LetterList = styled.ul`
  display: flex;
  align-items: flex-end;
  margin-bottom: 400px;
`;

const BackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 40px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 50%;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

const ResetButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 40px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #000;
    transform: rotate(180deg);
  }

  & span {
    position: relative;
    bottom: 4px;
  }
`;

export default GameBoard;
