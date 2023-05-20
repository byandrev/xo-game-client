import logoImage from "../../assets/logo.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  max-width: 200px;
  margin: 0 auto 0 auto;

  img {
    display: block;
    width: 100%;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <img src={logoImage} alt="XO Game logo" />
    </LogoContainer>
  );
}

export default Logo;
