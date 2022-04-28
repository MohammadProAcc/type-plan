import styled from "styled-components";
import { Color } from "styles";

// export const Input = styled.input.attrs((props) => ({
//   type: props.type || 'text',
// }))``;

export const Input = styled.input`
  border-bottom: solid 1px ${Color.Line};
  padding: 0.5rem;
`;
