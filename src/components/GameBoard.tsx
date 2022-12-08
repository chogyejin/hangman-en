import styled from "@emotion/styled";
import Letter from "./Letter";
import Retry from "./Retry";

interface Props {
  word: string;
  selectedLetters: string;
  isEnd: boolean;
}

const GameBoard = ({ word, selectedLetters, isEnd }: Props) => {
  return (
    <Container>
      {isEnd ? (
        <Retry />
      ) : (
        <Wrapper>
          {word.split("").map((letter, index) => (
            <Letter
              key={index}
              letter={letter}
              selectedLetters={selectedLetters}
            />
          ))}
        </Wrapper>
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
