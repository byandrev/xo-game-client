import Container from "../components/base/Container.jsx";
import Logo from "../components/base/Logo.jsx";
import ButtonsLogin from "../components/home/ButtonsLogin.jsx";
import Wrapper from "../components/base/Wrapper.jsx";

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
