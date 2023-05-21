import Container from "../components/base/Container.jsx";
import Wrapper from "../components/base/Wrapper.jsx";
import Logo from "../components/base/Logo.jsx";
import LoginForm from "../components/forms/LoginForm.jsx";

function Login() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <LoginForm />
      </Wrapper>
    </Container>
  );
}

export default Login;
