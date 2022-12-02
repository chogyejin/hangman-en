import styled from "@emotion/styled";
import { ALPAHBET } from "../constants";
import Keyboard from "./Keyboard";

interface Props {
  word: string;
}

const KeyboardList = ({ word }: Props) => {
  return (
    <Wrapper>
      {ALPAHBET.map((char) => (
        <Keyboard key={char} char={char} word={word} />
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
