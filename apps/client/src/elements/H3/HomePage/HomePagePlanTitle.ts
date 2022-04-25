import styled from 'styled-components';
import { Color, FontFamily, FontSize } from 'styles';
import { H3 } from '../H3';

export const HomePagePlanTitle = styled(H3)`
  margin-bottom: 4rem;
  padding-right: 1rem;
  border-right: 0.125rem solid ${Color.Line};

  font-size: ${FontSize.h3};
  font-family: ${FontFamily.medium};
  color: ${Color.Line};
`;
