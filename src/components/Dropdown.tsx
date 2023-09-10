import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useClickOutside } from "@/hooks/useClickOutside";
import { GameType } from "@/lib/api/getRandomword";

export interface Option {
  label: string;
  value: GameType;
}

interface Props {
  options: Option[];
  onClick: (type: GameType) => void;
}

const Dropdown = ({ options, onClick }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOutClick = () => {
    setIsOpen(false);
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (type: GameType) => {
    onClick(type);
    setIsOpen(false);
  };

  useClickOutside(ref, handleOutClick);

  return (
    <div ref={ref}>
      <SelectBox onClick={handleSelectClick}>Select type...</SelectBox>
      {isOpen && (
        <OptionsContainer>
          {options.map(({ label, value }, index) => (
            <OptionBox key={index} onClick={() => handleOptionClick(value)}>
              {label}
            </OptionBox>
          ))}
        </OptionsContainer>
      )}
    </div>
  );
};

const SelectBox = styled.div`
  width: 320px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 320px;
  margin-top: 10px;
`;

const OptionBox = styled.div`
  text-align: center;
  width: inherit;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export default Dropdown;
