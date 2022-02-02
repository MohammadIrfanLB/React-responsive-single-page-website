import styled, { css } from "styled-components";
import NavBar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Services from "./components/Services";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0, 35% 100%, 0% 100%);
  background-color: pink;
`;

const ServicesShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 35% 0, 35% 100%, 0% 100%);
  background-color: pink;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(35% 0, 100% 0, 100% 100%, 67% 100%);
  background-color: crimson;
`;

const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <>
      <Container>
        <NavBar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Features />
        <FeatureShape />
      </Container>
      <Container>
        <Services />
        {!smallScreen && <ServicesShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;
