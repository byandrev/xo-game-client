import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  height: 100%;
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
