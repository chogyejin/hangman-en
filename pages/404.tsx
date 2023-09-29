import React from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";

const NotFound = () => {
  return (
    <Container>
      <span>Page Not Found!</span>
      <Link href={"/"}>Go Home</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 32px;
  font-weight: 700;
`;

const Link = styled(NextLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: relative;
  width: 200px;
  height: 40px;
  border: 1px solid #000;
  color: #fff;
  background-color: #000;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    color: #000;
  }

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #fff;
    transition: all 0.3s ease;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

export default NotFound;
