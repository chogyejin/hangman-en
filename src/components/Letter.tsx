import React from "react";
import styled from "@emotion/styled";

interface Props {
  letter: string;
  correctLetters: string;
}

const Letter = ({ letter, correctLetters }: Props) => {
  return (
    <Input value={correctLetters.includes(letter) ? letter : ""} readOnly />
  );
};

const Input = styled.input`
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 24px;
  margin: 0 5px;
  border: none;
  border-bottom: 2px solid black;
`;

export default Letter;
