import { keyframes } from 'styled-components';

export const HomePageIntoBannerAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(-1rem, -1rem);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
