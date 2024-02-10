import { ReactNode, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Props<T> {
  title: string;
  options: readonly T[];
  renderOption: (option: T) => ReactNode;
}

const Dropdown = <T,>({ title, options, renderOption }: Props<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div ref={ref}>
      <SelectButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {title}
      </SelectButton>
      {isOpen && (
        <ListContainer>
          {options.map((option, index) => (
            <ListItem key={index}>{renderOption(option)}</ListItem>
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
