import { keyframes } from 'styled-components';

export const HomePageTitleAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(1rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
