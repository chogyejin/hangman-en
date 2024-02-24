import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: Props) => {
  return <Base {...props}>{children}</Base>;
};

const Base = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #fff;
  transition: background-color 0.3s, stroke 0.3s;
  transition: all 0.3 ease-in-out;

  &:hover {
    background-color: #000;
  }

  &:hover svg {
    stroke: #fff;
  }
`;

export default Button;
