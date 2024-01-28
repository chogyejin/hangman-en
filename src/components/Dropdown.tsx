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
      <SelectButton role="button" onClick={handleSelectClick}>
        Select type...
      </SelectButton>
      {isOpen && (
        <ListContainer>
          {options.map(({ label, value }, index) => (
            <ListItem key={index} onClick={() => handleOptionClick(value)}>
              {label}
            </ListItem>
          ))}
        </ListContainer>
      )}
    </div>
  );
};

const SelectButton = styled.button`
  width: 320px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: left;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 320px;
  margin-top: 10px;
`;

const ListItem = styled.li`
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
