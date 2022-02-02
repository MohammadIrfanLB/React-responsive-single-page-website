import React from "react";
import styled from "styled-components";
import print from "../img/print.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 70%;
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: blueviolet;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

const Features = () => {
  return (
    <Container>
      <Left>
        <Image src={print} />
      </Left>
      <Right>
        <Title>
          <b>Good</b> Design <br />
          <b>Good</b> Business
        </Title>
        <SubTitle>Get good designs with us</SubTitle>
        <Desc>
          Emiway Bantai is one of India’s top rappers. Best known for his song
          “Asli Hip Hop” from Gully Boy, his popularity soars amongst Indian
          youth. As you can imagine, we were kicked to have the opportunity to
          work on his branding. Hence, we decided to design a logo that has a
          musical element ingrained in it while playing with his initials. As
          you can see the E here represents the equalizer. The sharp edges of
          the B reverberate the ferocity of his lyrics.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Features;
