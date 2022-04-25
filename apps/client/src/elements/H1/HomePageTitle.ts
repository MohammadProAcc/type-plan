import styled from 'styled-components';
import { Color, FontFamily, HomePageTitleAnimation } from 'styles';
import { H1 } from '.';

export const HomePageTitle = styled(H1)`
  font-family: ${FontFamily.bold};
  padding-bottom: 0.5rem;
  border-bottom: 0.25rem solid ${Color.Line};
  margin-bottom: 1rem;

  animation: ${HomePageTitleAnimation} 0.5s forwards;

  display: inline-flex;

  color: ${Color.Line};
`;
