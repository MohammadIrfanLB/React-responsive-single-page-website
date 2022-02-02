import React from "react";
import styled from "styled-components";
import bg from "../img/bg.jpg";
import Phone from "../img/phone.png";
import Map from "../img/map.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 90%;
  background: url(${bg});
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  margin: 50px;
  margin-left: 115px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const Form = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
    margin-top: 15px;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const AdressContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AdressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br />
            Let's get in touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AdressContainer>
          <AdressItem>
            <Icon src={Map} />
            <Text>123, 6th block BTM Layout</Text>
          </AdressItem>
          <AdressItem>
            <Icon src={Phone} />
            <Text>+91 9899848964</Text>
            <Text>+91 9899848964</Text>
          </AdressItem>
          <AdressItem>
            <Icon src={Send} />
            <Text>contacyt@gmail.com</Text>
            <Text>sales@gmail.com</Text>
          </AdressItem>
        </AdressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
