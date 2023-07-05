import React from "react";
import styled from "styled-components";

const Long = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};
export default Long;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #020c1b;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  position: relative;
  animation-name: long;
  animation-duration: 3s;
  animation-delay: 16s;
  animation-fill-mode: forwards;
  @keyframes long {
    0% {
      background-color: yellow;
      left: 0px;
      top: 0px;
    }
    15% {
      background-color: red;
      left: 50px;
      top: 0px;
    }
    25% {
      background-color: blue;
      left: 100px;
      top: 0px;
    }
    50% {
      background-color: gray;
      left: 200px;
      top: 0px;
    }
    75% {
      background-color: green;
      left: 300px;
      top: 0px;
    }
    100% {
      background-color: palegoldenrod;
      left: 0px;
      top: 0px;
    }
  }
`;
