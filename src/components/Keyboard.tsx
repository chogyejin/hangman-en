import styled from "@emotion/styled";

interface Props {
  char: string;
}

const Keyboard = ({ char }: Props) => {
  const handleClick = (selectedChar: string) => {
    console.log(selectedChar);
  };

  return <Button onClick={() => handleClick(char)}>{char}</Button>;
};

const Button = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: #eee;
  border: 1px solid black;
  margin: 0 5px 5px 5px;
  font-weight: 700;
`;

export default Keyboard;
