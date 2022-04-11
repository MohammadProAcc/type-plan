import styled from 'styled-components';
import { Color } from 'styles';
import { Div } from '..';

export const LayoutNavbarContainer = styled(Div)`
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;

  background: ${Color.BackgroundLight};
`;
