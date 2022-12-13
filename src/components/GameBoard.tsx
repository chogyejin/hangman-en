import styled from "@emotion/styled";
import { Result } from "../hooks/useGuessing";
import Letter from "./Letter";
import Retry from "./Retry";

interface Props {
  word: string;
  correctLetters: string;
  result: Result;
  resetGame: () => void;
}

const GameBoard = ({ word, correctLetters, result, resetGame }: Props) => {
  const { isLose, isWin } = result;

  return (
    <Container>
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
        <Retry result={result} resetGame={resetGame} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 100px;
`;

export default GameBoard;
