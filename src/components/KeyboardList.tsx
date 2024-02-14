import styled from "@emotion/styled";
import { Result } from "@/hooks/useGuessing";
import { ALPAHBET } from "@/constants";
import Keyboard from "@/components/Keyboard";

interface Props {
  onSelect: (letter: string) => void;
  result: Result;
  isLoading: boolean;
}

const KeyboardList = ({ onSelect, result, isLoading }: Props) => {
  return (
    <ListContainer>
      {ALPAHBET.map((char) => (
        <li key={char}>
          <Keyboard
            char={char}
            onSelect={onSelect}
            result={result}
            isLoading={isLoading}
          />
        </li>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default KeyboardList;
