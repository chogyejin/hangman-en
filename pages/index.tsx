import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Dropdown from "@/components/Dropdown";
import { GameType } from "@/lib/api/getRandomword";

const HomePage = () => {
  const router = useRouter();

  const handleOptionClick = (type: GameType) => {
    router.push(`/game?type=${type}`);
  };

  return (
    <Container>
      <Dropdown
        options={[
          { label: "Noun", value: "noun" },
          { label: "Verb", value: "verb" },
          { label: "Adjective", value: "adjective" },
          { label: "Adverb", value: "adverb" },
        ]}
        onClick={handleOptionClick}
      />
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
