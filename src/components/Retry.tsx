import styled from "@emotion/styled";
import { Result } from "../hooks/useGuessing";

interface Props {
  result: Result;
  resetGame: () => void;
  word: string;
}

const Retry = ({ result, resetGame, word }: Props) => {
  const { isLose, isWin } = result;
  const handleClick = () => {
    resetGame();
  };

  return (
    <Container>
      {isLose && (
        <>
          <div>You lose</div>
          <Button onClick={handleClick}>Retry?</Button>
        </>
      )}
      {isWin && (
        <>
          <div>You win</div>
          <div>Answer is {word}</div>
          <Button onClick={handleClick}>New game?</Button>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button``;

export default Retry;
