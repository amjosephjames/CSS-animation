import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Logo</Logo>
        <Navigator>
          <Span offset={-100} smooth={true} duration={500} to="home">
            Home
          </Span>
          <Span offset={-100} smooth={true} duration={500} to="about">
            About
          </Span>
          <Span offset={-100} smooth={true} duration={500} to="services">
            Services
          </Span>
          <Span offset={-100} smooth={true} duration={500} to="contact">
            Contact
          </Span>
          <Button>Register</Button>
        </Navigator>
      </Wrapper>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Logo = styled.div`
  color: white;
  font-size: 25px;
`;
const Navigator = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Span = styled(Link)`
  font-size: 16px;
  color: white;
`;
const Button = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  color: black;
`;
