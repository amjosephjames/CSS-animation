import React from "react";
import styled from "styled-components";
import "../../src/App.css";
const Onscroll = () => {
  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  window.addEventListener("scroll", reveal);

  return (
    <Body>
      <Section>
        <Container className="reveal">
          <h2>Node JS</h2>
        </Container>
      </Section>
    </Body>
  );
};

export default Onscroll;

const Container = styled.div`
  margin: 100px;
  /* background-color: burlywood; */
  h1 {
    font-size: 50px;
  }
`;
const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-child(1) {
    color: #fff;
  }
  :nth-child(2) {
    background: #fff;
    color: #1d212b;
  }
  :nth-child(3) {
    color: #fff;
  }
  :nth-child(4) {
    background: #fff;
    color: #1d212b;
  }
`;
const Body = styled.div`
  background: #1d212b;
  height: 200vh;
`;
