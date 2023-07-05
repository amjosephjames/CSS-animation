import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter

                .typeString("MY NAME IS JAMES E. JOSEPH...")
                .pauseFor(1000)
                .deleteAll()

                .start()
                .typeString("AM A FULLSTACK SOFTWARE DEVELOPER...")
                .pauseFor(1000)
                .deleteAll()

                .start()
                .typeString("AM AN ASPIRING BLOCKCHAIN ENGINEER...")
                .pauseFor(1000)
                .deleteAll()

                .start()
                .typeString("AM A CLOUD ARCHITECT...");
            }}
          />
        </Text>
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
const Text = styled.div`
  font-size: 30px;
`;
