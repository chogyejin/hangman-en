import styled from "@emotion/styled";
import { ALPAHBET } from "../constants";
import Keyboard from "./Keyboard";

const KeyboardList = () => {
  return (
    <Wrapper>
      {ALPAHBET.map((char) => (
        <Keyboard key={char} char={char} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default KeyboardList;
