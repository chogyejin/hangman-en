import styled from "@emotion/styled";
import Letter from "./Letter";

interface Props {
  word: string;
}

const GameBoard = ({ word }: Props) => {
  return (
    <Container>
      <Wrapper>
        {word.split("").map((letter, index) => (
          <Letter key={index} letter={letter} />
        ))}
      </Wrapper>
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
