import styled from "@emotion/styled";
import { useState } from "react";
import { hasLetter } from "../lib/utils/hasLetter";

interface Props {
  char: string;
  word: string;
}

const Keyboard = ({ char, word }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (selectedChar: string) => {
    setIsVisible(false);
    if (hasLetter(word, selectedChar)) {
      console.log("포함");
      return;
    }
    console.log("안 포함");
  };
  console.log(isVisible);

  return (
    <Button
      isVisible={isVisible}
      disabled={!isVisible}
      onClick={() => handleClick(char)}
    >
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
