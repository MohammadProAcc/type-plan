import styled from 'styled-components';
import { Color } from 'styles';

// export const Input = styled.input.attrs((props) => ({
//   type: props.type || 'text',
// }))``;

export const Input = styled.input`
  border: solid 1px ${Color.BorderLight};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
