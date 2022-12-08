import styled from "@emotion/styled";

const Retry = () => {
  const handleClick = () => {
    console.log("retry");
  };

  return (
    <Container>
      <div>You lose</div>
      <Button onClick={handleClick}>Retry?</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button``;

export default Retry;
