import React from "react";
import styled from "styled-components";
import Rectangle50 from "../img/Rectangle50.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  background-image: linear-gradient(to right, rgb(1, 43, 110), rgb(4, 17, 77));
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 40%;
  padding-left: 130px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: -150px;
    margin-bottom: -100px;
    padding-left: 4px;
  }
`;

const Right = styled.div`
  width: 60%;
  background-image: linear-gradient(to right, rgb(1, 43, 110), rgb(4, 17, 77));
  height: 300px;
  margin-top: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 120px;
  }
`;

const Image = styled.img`
  width: 80%;
  margin-top: 150px;
  margin-right: 50px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  color: #ffff;
  text-decoration: underline;
  font-size: 30px;
  margin-bottom: 20px;
  margin-left: 100px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
    margin: 10px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  color: #ffff;
  margin-left: 100px;
  margin-right: 100px;
  @media only screen and (max-width: 480px) {
    margin: 10px;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Left>
        <Image src={Rectangle50} />
      </Left>
      <Right>
        <Title>Read article</Title>
        <Desc>
          <b>
            The Best Way to Avoid Data Leaks and Privacy Scandals: Don't Own
            Consumer Data
          </b>
          <br />
          “These are companies, like intellicam, that are actually working to
          get our data onto personal servers so we own it, not the companies”
        </Desc>
      </Right>
    </Container>
  );
};

export default Hero;
