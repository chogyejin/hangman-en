import styled from "@emotion/styled";
import HangManCanvas from "@/components/HangManCanvas";
import Letter from "@/components/Letter";
import Retry from "@/components/Retry";
import { Result } from "@/hooks/useGuessing";
import { Count } from "@/constants";
import Loading from "@/components/Loading";

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
      <HangManCanvas count={count} />
      {result === "in-progress" ? (
        <Wrapper>
          {word.split("").map((letter, index) => (
            <Letter
              key={index}
              letter={letter}
              correctLetters={correctLetters}
            />
          ))}
        </Wrapper>
      ) : (
        <Retry result={result} resetGame={resetGame} word={word} />
      )}
      <Button onClick={resetGame}>
        <span>&#8635;</span>
      </Button>
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

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 400px;
`;

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 40px;
  width: 60px;
  height: 60px;
  color: #000;
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
