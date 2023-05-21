import styled from "styled-components";

/**
 * @param direction: row || column
 */
const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
`;

export default Flex;
