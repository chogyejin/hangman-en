import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 40px;
  width: 60px;
  height: 60px;
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #000;
    transform: rotate(180deg);
  }

  & span {
    position: relative;
    bottom: 4px;
  }
`;

export default Button;
