import React from "react";
import styled from "styled-components";
import one from "../components/assets/image-confetti.jpg";
import two from "../components/assets/image-currency.jpg";
import thr from "../components/assets/image-mockups.png";
import fou from "../components/assets/image-plane.jpg";
import fiv from "../components/assets/never.jpg";
import six from "../components/assets/project.jpg";
const Circular = () => {
  return (
    <Container>
      <Slider>
        <span
          style={{
            transform: "rotateY(calc(1*45deg)) translateZ(350px)",
          }}
        >
          <img src={one} alt="" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(2*45deg)) translateZ(350px)",
          }}
        >
          <img src={two} alt="" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(3*45deg)) translateZ(350px)",
          }}
        >
          <img src={thr} alt="" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(4*45deg)) translateZ(350px)",
          }}
        >
          <img src={fou} alt="" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(5*45deg)) translateZ(350px)",
          }}
        >
          <img src={fiv} alt="" />
        </span>
        <span
          style={{
            transform: "rotateY(calc(6*45deg)) translateZ(350px)",
          }}
        >
          <img src={six} alt="" />
        </span>
      </Slider>
    </Container>
  );
};
export default Circular;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #020c1b;
`;
const Slider = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: rotate 30s linear infinite;

  @keyframes rotate {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }
    0% {
      transform: perspective(1000px) rotateY(360deg);
    }
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    img {
      object-fit: cover;
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 2s;

      :hover {
        transform: translateY(-50px) scale(1.2);
      }
    }
  }
`;
