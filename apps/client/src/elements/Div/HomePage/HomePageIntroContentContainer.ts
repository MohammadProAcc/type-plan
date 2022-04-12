import { Div } from '..';
import styled from 'styled-components';
import { Device } from 'styles';

export const HomePageIntroContentContainer = styled(Div)`
  width: 100%;

  @media (${Device.lg}) {
    width: 50%;
    padding-left: 2rem;
  }
`;
