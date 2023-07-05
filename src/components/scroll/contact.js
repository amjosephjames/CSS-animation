import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <h1>contact page</h1>
    </Container>
  );
};
export default Contact;

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
