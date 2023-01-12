import styled from "@emotion/styled";
import Link from "next/link";

const HomePage = () => {
  return (
    <Container>
      <Link href="/game">Start</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 40px;
`;

export default HomePage;
