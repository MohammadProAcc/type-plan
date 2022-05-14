import styled from 'styled-components';
import { Border, Color, Radius } from 'styles';
import { Div } from '../Div';

export const PlanCardImgContainer = styled(Div)`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border: ${Border("0.25rem", Color.BackgroundSecondary)};
  border-radius: ${Radius.l3};
  border-bottom: none;

  position: relative;

  &:hover {
    cursor: pointer;
  }
`;
