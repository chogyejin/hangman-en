import styled from "@emotion/styled";
import { Result } from "../hooks/useGuessing";
import HangManCanvas from "./HangManCanvas";
import Letter from "./Letter";
import Retry from "./Retry";

interface Props {
  word: string;
  correctLetters: string;
  result: Result;
  resetGame: () => void;
  count: number;
}

const GameBoard = ({
  word,
  correctLetters,
  result,
  resetGame,
  count,
}: Props) => {
  const { isLose, isWin } = result;

  const handleClick = () => {
    resetGame();
  };

  return (
    <Container>
      <HangManCanvas count={count} />
      {!isLose && !isWin ? (
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
      <Button onClick={handleClick}>
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
