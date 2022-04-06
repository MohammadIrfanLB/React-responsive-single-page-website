import styled from "styled-components";
import Team from "../img/Team.png";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
  }
`;

const Image = styled.img`
  width: 80%;
  @media only screen and (max-width: 480px) {
    width: 150%;
    margin-top: -100px;
    margin-left: 40px;
  }
`;

const Right = styled.div`
  width: 50%;
  padding: 80px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;
const Title = styled.h1`
  color: #406cce;
  font-size: 16px;
`;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

const OurTeam = () => {
  return (
    <Container>
      <Right>
        <Wrapper>
          <Title>OUR TEAM</Title>
          <h3>MEET THE TEAM OF BEST DEVELOPERS:</h3>
          <Desc>
            We have a team of skilled veteran developers who exhibit amazing
            efficiency in their performance. With MerkLabs, you are in safe
            hands. We understand your needs and give out a performance that
            matches your expectations.
          </Desc>
        </Wrapper>
      </Right>
      <Left>
        <Image src={Team} />
      </Left>
    </Container>
  );
};

export default OurTeam;
