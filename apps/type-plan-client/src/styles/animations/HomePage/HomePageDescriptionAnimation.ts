import { keyframes } from 'styled-components';

export const HomePageDescriptionAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
