import styled from "@emotion/styled";
import React, { useState } from "react";
import { hasLetter } from "../lib/utils/hasLetter";

interface Props {
  letter: string;
  selectedLetters: string;
}

const Letter = ({ letter, selectedLetters }: Props) => {
  return (
    <LetterBox>{hasLetter(selectedLetters, letter) ? letter : ""}</LetterBox>
  );
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
