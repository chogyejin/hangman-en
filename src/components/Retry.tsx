import styled from "@emotion/styled";
import { Result } from "@/hooks/useGuessing";

interface Props {
  result: Result;
  resetGame: () => void;
  word: string;
}

const Retry = ({ result, resetGame, word }: Props) => {
  const handleClick = () => {
    resetGame();
  };

  return (
    <Container>
      {result === "lose" && (
        <>
          <div>You lose!</div>
          <AnswerText>
            Answer is <span>{word}</span>
          </AnswerText>
          <Button onClick={handleClick}>Retry?</Button>
        </>
      )}
      {result === "win" && (
        <>
          <div>You win!</div>
          <AnswerText>
            Answer is <span>{word}</span>
          </AnswerText>
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
  font-size: 20px;
`;

const AnswerText = styled.div`
  & span {
    font-weight: 700;
  }

  margin-bottom: 20px;
`;

const Button = styled.button`
  position: relative;
  width: 200px;
  height: 40px;
  font-weight: 700;
  border: 1px solid #000;
  color: #fff;
  background-color: #000;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    color: #000;
  }

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #fff;
    transition: all 0.3s ease;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

export default Retry;
