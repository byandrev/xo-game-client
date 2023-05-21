import styled from "styled-components";

const InputStyled = styled.input`
  border-radius: ${(props) => props.theme.radius};
  border: 2px solid ${(props) => props.theme.border};
  padding: ${(props) => props.theme.sizes.normal};
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.sizes.normal};
  color: ${(props) => props.theme.text};
  margin-bottom: ${(props) => props.mb}px;

  &:focus {
    outline: none;
  }
`;

/**
 * Input form
 * @param type: type input
 * @param placeholder
 * @param mb: margin-bottom in px
 * @param value
 * @param onChange
 */
function Input({ type = "text", placeholder = "Text ...", mb = 0, value = "", onChange }) {
  return (
    <InputStyled type={type} placeholder={placeholder} mb={mb} value={value} onChange={onChange} />
  );
}

export default Input;
