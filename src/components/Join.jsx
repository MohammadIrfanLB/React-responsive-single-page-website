import React from "react";
import styled from "styled-components";
import code from "../img/code.png";

const Container = styled.div`
  padding: 50px;
  background: #0f2f6c;
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
  }
`;

const List = styled.ul`
  text-decoration: none;
  display: flex;
  padding-left: 190px;
`;

const Image = styled.img`
  width: 60%;
  padding: 40px;
  background: #1a2747;
  @media only screen and (max-width: 480px) {
  }
`;

const Right = styled.div`
  margin-top: -100px;
  width: 50%;
  padding: 80px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;
const Title = styled.h1`
  font-size: 36px;
`;
const Desc = styled.p`
  font-size: 16px;
  font-weight: 200;
  margin-top: 10px;
  margin-right: 300px;
`;

const Wrapper1 = styled.div``;

const Line = styled.hr`
  color: rgba(255, 255, 255, 0.1);
  margin-right: 200px;
`;

const Join = () => {
  return (
    <Container>
      <Right>
        <Wrapper1>
          <Line />
        </Wrapper1>
        <Wrapper>
          <Title>Join Us</Title>
          <h3>BE A PART OF OUR HAPPY COMMUNITY</h3>
          <Desc>
            We take immense pride in our achievements and have a happy and
            satisfied community that trusts our work wholeheartedly. Then what
            are you waiting for ,come and be a part of the merklabs family,
            because we are here always for you.
          </Desc>
        </Wrapper>
      </Right>
      <Left>
        <List>
          <ul>Node</ul>
          <ul>Java</ul>
          <ul>Curl</ul>
        </List>
        <Image src={code} />
      </Left>
    </Container>
  );
};

export default Join;
