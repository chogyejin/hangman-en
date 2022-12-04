import styled from "@emotion/styled";
import { ALPAHBET } from "../constants";
import Keyboard from "./Keyboard";

interface Props {
  onSelect: (letter: string) => void;
}

const KeyboardList = ({ onSelect }: Props) => {
  return (
    <Wrapper>
      {ALPAHBET.map((char) => (
        <Keyboard key={char} char={char} onSelect={onSelect} />
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
