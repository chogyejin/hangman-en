import styled from "@emotion/styled";
import React from "react";

const Loading = () => {
  return (
    <Wrapper>
      <Spinner />
      <Text>Loading</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const Spinner = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #000;
  border-bottom-color: #000;
  animation: spinner 0.6s ease infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Text = styled.div`
  font-weight: 700;
`;

export default Loading;
