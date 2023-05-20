import Container from "../components/base/Container.jsx";
import Logo from "../components/base/Logo.jsx";
import ButtonsLogin from "../components/home/ButtonsLogin.jsx";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6rem 0;
`;

function Home() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <ButtonsLogin />
      </Wrapper>
    </Container>
  );
}

export default Home;
