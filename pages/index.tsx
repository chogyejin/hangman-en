import styled from "@emotion/styled";
import NextLink from "next/link";
import Dropdown from "@/components/Dropdown";
import { capitalizeFirstLetter } from "@/lib/utils/capitalize";
import { GAME_TYPE_LIST } from "@/constants";

const HomePage = () => {
  return (
    <Container>
      <Dropdown
        title="Select type..."
        options={GAME_TYPE_LIST}
        renderOption={(type) => (
          <Link href={`/game?type=${type}`}>{capitalizeFirstLetter(type)}</Link>
        )}
      />
    </Container>
  );
};

const Link = styled(NextLink)`
  display: block;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 32px;
`;

export default HomePage;
