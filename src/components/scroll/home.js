import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <h1>home page</h1>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
  }
`;
