import { Div } from '../Div';
import styled from 'styled-components';
import { Breakpoint } from 'styles';

export const LayoutChildrenContainer = styled(Div)`
  width: 100%;
  max-width: ${Breakpoint.ultimate}px;
  min-height: calc(100vh - 4rem);
  margin: 0 auto;
`;
