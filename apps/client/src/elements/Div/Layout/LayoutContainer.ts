import styled from 'styled-components';
import { Color } from 'styles';
import { Div } from '..';

export const LayoutContainer = styled(Div)`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background: ${Color.BackgroundPrimary};
`;
