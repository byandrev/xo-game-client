import styled from "styled-components";
import { sizes } from "../../theme";

const Paragraph = styled.p`
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
  color: ${(props) => props.theme.text};
  margin-bottom: ${(props) => props.mb}px;
`;

function Text({ children, size = "normal", align = "left", mb = 0 }) {
  return (
    <Paragraph size={sizes[size]} align={align} mb={mb}>
      {children}
    </Paragraph>
  );
}

export default Text;
