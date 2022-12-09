import styled from "@emotion/styled";
import Letter from "./Letter";
import Retry from "./Retry";

interface Props {
  word: string;
  correctLetters: string;
  isEnd: boolean;
  isAnswer: boolean;
}

const GameBoard = ({ word, correctLetters, isEnd, isAnswer }: Props) => {
  return (
    <Container>
      {!isEnd && !isAnswer ? (
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
        <Retry isEnd={isEnd} isAnswer={isAnswer} />
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
