import { Div } from '..';
import styled from 'styled-components';
import { Device } from 'styles';

export const HomePageIntroContainer = styled(Div)`
  width: 100%;
  height: calc(100vh - 4rem);
  padding: 1rem;

  display: flex;
  justify-content: space-between;

  @media (${Device.desktop}) {
    padding: 4rem;
  }
`;
