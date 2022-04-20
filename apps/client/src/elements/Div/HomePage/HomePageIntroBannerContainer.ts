import styled from 'styled-components';
import { Div } from '..';
import { Device, HomePageIntoBannerAnimation } from 'styles';

export const HomePageIntroBannerContainer = styled(Div)`
  width: 100%;
  height: 0;
  padding-top: 38%;
  margin: auto 0;

  position: relative;

  opacity: 0;

  animation: ${HomePageIntoBannerAnimation} 0.5s forwards;
  animation-delay: 0.5s;

  @media (${Device.desktop}) {
    width: 50%;
  }
`;
