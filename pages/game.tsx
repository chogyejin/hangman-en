import styled from "@emotion/styled";
import GameBoard from "../src/components/GameBoard";
import KeyboardList from "../src/components/KeyboardList";
import Loading from "../src/components/Loading";
import useWord from "../src/hooks/useWord";

const GamePage = () => {
  const { word, isLoading } = useWord();
  console.log(word);

  return (
    <div>
      {isLoading ? (
        <Wrapper>
          <Loading />
        </Wrapper>
      ) : (
        <GameBoard word={word} />
      )}
      <KeyboardList />
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export default GamePage;
