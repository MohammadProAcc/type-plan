import { keyframes } from 'styled-components';

export const HomePageIntroCardAnimation = (priority: number) => keyframes`
  from {
    opacity: 0;
    transform: translateY(${priority * 16}px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
