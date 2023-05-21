import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textDark};
  padding: 0.75rem 2rem;
  border: none;
  border-radius: ${(props) => props.theme.radius};
  box-shadow: 0 5px 10px ${(props) => props.theme.shadow};
  cursor: pointer;
  font-weight: 500;
  font-size: ${(props) => props.theme.sizes.normal};
  margin-bottom: ${(props) => props.mb}px;
`;

const ButtonLight = styled(Button)`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
`;

export { Button, ButtonLight };
