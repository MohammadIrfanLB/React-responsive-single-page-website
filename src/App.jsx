import Join from "./components/Join";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Projects from "./components/Projects";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const App = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Team />
      </Container>
      <Container>
        <Projects />
      </Container>
      <Container>
        <Join />
      </Container>
    </>
  );
};

export default App;
