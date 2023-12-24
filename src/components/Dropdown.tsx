import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  onClick: (option: string) => void;
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

  const handleOptionClick = (option: string) => {
    onClick(option);
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
