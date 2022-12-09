import styled from "@emotion/styled";

interface Props {
  isEnd: boolean;
  isAnswer: boolean;
}

const Retry = ({ isEnd, isAnswer }: Props) => {
  const handleClick = () => {
    console.log("retry");
  };

  return (
    <Container>
      {isEnd && (
        <>
          <div>You lose</div>
          <Button onClick={handleClick}>Retry?</Button>
        </>
      )}
      {isAnswer && (
        <>
          <div>You win</div>
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
