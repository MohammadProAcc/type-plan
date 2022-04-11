import styled from 'styled-components';
import { HomePageIntroCardAnimation } from 'styles/animations';
import { Div } from '..';

export const HomePageIntroCardContainer = styled(
  Div
)<HomePageIntroCardContainerProps>`
  margin: 2rem 0;
  display: flex;
  opacity: 0;

  animation: ${(props) => HomePageIntroCardAnimation(props.priority)} 1s forwards;
  animation-delay: ${(props) => `${props.priority + 1}s`};
`;

export interface HomePageIntroCardContainerProps {
  priority: number;
}
