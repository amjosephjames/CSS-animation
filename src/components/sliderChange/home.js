import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Home = () => {
  const sliderChange = [
    {
      id: 1,
      title: "A Programmer",
      //   image: require("../assets/"),
      //   backgroundColor: "blue",
      star: 2,
    },
    {
      id: 2,
      title: "A Coder",
      //   image: require("../assets/"),
      //   backgroundColor: "green",
      star: 3,
    },
    {
      id: 3,
      title: "A Engineer",
      //   image: require("../assets/"),
      //   backgroundColor: "yellow",
      star: 1,
    },
    {
      id: 3,
      title: "A Developer",
      //   image: require("../assets/"),
      //   backgroundColor: "red",
      star: 1,
    },
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((el) => el + 1);
    }, 3000);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Div>
          <H1>{sliderChange[count % sliderChange.length].title}</H1>
          <H2>{sliderChange[count % sliderChange.length].star}</H2>
        </Div>
      </Wrapper>
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
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  height: 50px;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 18px;
`;
const H2 = styled.div`
  font-size: 18px;
`;
