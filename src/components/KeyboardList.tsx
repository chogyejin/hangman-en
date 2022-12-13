import styled from "@emotion/styled";
import { ALPAHBET } from "../constants";
import { Result } from "../hooks/useGuessing";
import Keyboard from "./Keyboard";

interface Props {
  onSelect: (letter: string) => void;
  isNewGame: boolean;
  result: Result;
}

const KeyboardList = ({ onSelect, isNewGame, result }: Props) => {
  return (
    <Wrapper>
      {ALPAHBET.map((char) => (
        <Keyboard
          key={char}
          char={char}
          onSelect={onSelect}
          isNewGame={isNewGame}
          result={result}
        />
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
