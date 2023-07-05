import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h1>about page</h1>
    </Container>
  );
};
export default About;

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
