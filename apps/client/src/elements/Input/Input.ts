import styled from "styled-components";
import { Color, Radius } from "styles";

// export const Input = styled.input.attrs((props) => ({
//   type: props.type || 'text',
// }))``;

export const Input = styled.input`
  border: solid 1px ${Color.LineSecondary};
  border-radius: ${Radius.l3};
  background-color: transparent;
  padding: 0.5rem;
`;
