import styled from "@emotion/styled";
import React from "react";

interface Props {
  letter: string;
}

const Letter = ({ letter }: Props) => {
  return <LetterBox></LetterBox>;
};

const LetterBox = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin: 0 5px;
  border-bottom: 1px solid black;
`;

export default Letter;
