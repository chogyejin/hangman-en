import styled from "@emotion/styled";
import { useState } from "react";
import { Result } from "../hooks/useGuessing";

interface Props {
  char: string;
  onSelect: (letter: string) => void;
  result: Result;
}

const Keyboard = ({ char, onSelect, result }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    if (result !== "In Progress") {
      return;
    }

    setIsVisible(false);
    onSelect(char.toLocaleLowerCase());
  };

  return (
    <Button isVisible={isVisible} disabled={!isVisible} onClick={handleClick}>
      {char}
    </Button>
  );
};

const Button = styled.button<{ isVisible: boolean }>`
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: #eee;
  border: 1px solid black;
  margin: 0 5px 5px 5px;
  font-weight: 700;
  animation: ${({ isVisible }) => (isVisible ? "" : "fadeout")} 1s;
  animation-fill-mode: forwards;

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export default Keyboard;
