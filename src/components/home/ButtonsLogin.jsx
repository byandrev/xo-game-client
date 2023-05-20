import styled from "styled-components";
import { Button, ButtonLight } from "../base/Buttons.jsx";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

function ButtonsLogin() {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleSignUp = () => navigate("/signup");

  return (
    <Wrapper>
      <Button onClick={handleLogin}>Login</Button>
      <ButtonLight onClick={handleSignUp}>Sign Up</ButtonLight>
    </Wrapper>
  );
}

export default ButtonsLogin;
