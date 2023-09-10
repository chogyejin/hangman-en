import React from "react";
import styled from "@emotion/styled";

interface Props {
  letter: string;
  correctLetters: string;
}

const Letter = ({ letter, correctLetters }: Props) => {
  return <LetterBox>{correctLetters.includes(letter) ? letter : ""}</LetterBox>;
};

const LetterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin: 0 5px;
  border-bottom: 1px solid black;
`;

export default Letter;
