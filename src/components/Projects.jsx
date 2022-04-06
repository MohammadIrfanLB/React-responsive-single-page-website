import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 160%;
  display: flex;
  margin-left: 110px;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 200;
  color: #16fcd2;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 16px;
  }
`;

const Desc = styled.p`
  font-size: 36px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 10px;
  color: #525f8a;
  border-radius: 20px;
  border: black;
  margin-top: 50px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  width: 40%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Wrapper = styled.div``;

const Line = styled.hr`
  color: rgba(255, 255, 255, 0.1);
  margin-left: -1360px;
  margin-right: 170px;
  margin-top: 250px;
`;

const Projects = () => {
  return (
    <Container>
      <Left>
        <Title>PROJECTS</Title>
        <Desc>
          We have completed many <br />
          amazing projects that you
          <br /> will not believe
        </Desc>
      </Left>
      <Right>
        <Button>Technology</Button>
      </Right>
      <Wrapper>
        <Line />
      </Wrapper>
    </Container>
  );
};

export default Projects;
