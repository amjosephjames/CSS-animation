import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Cardholder>
        <Card>
          <P>MY NAME IS JOSEPH</P>
        </Card>
        <Card>
          <P>MY SURNAME IS JAMES</P>
        </Card>
        <Card>
          <P>MY NICKNAME IS JOE</P>
        </Card>
      </Cardholder>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cardholder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const P = styled.div`
  font-size: 30px;
`;
