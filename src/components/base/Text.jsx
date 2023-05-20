import styled from "styled-components";
import { sizes } from "../../theme";

const Paragraph = styled.p`
  font-size: ${(props) => props.size};
`;

function Text({ children, size = "normal" }) {
  return <Paragraph size={sizes[size]}>{children}</Paragraph>;
}

export default Text;
