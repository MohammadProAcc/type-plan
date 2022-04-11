import styled from 'styled-components';
import { Color, FontFamily, FontSize, HomePageDescriptionAnimation } from 'styles';
import { P } from '..';

export const HomePageDescription = styled(P)`
  margin-bottom: 3rem;

  font-size: ${FontSize.xl};
  font-family: ${FontFamily.medium};
  line-height: 1.5rem;

  opacity: 0;

  animation: ${HomePageDescriptionAnimation} 0.5s forwards;
  animation-delay: 1s;

  color: ${Color.PrimaryLine};
`;
