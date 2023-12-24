import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Dropdown from "@/components/Dropdown";

const options = [
  { label: "Noun", value: "noun" },
  { label: "Verb", value: "verb" },
  { label: "Adjective", value: "adjective" },
  { label: "Adverb", value: "adverb" },
];

const HomePage = () => {
  const router = useRouter();

  const handleOptionClick = (type: string) => {
    router.push(`/game?type=${type}`);
  };

  return (
    <Container>
      <Dropdown options={options} onClick={handleOptionClick} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 32px;
`;

export default HomePage;
