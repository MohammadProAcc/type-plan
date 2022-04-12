import styled from 'styled-components';
import { Div } from '../Div';

export const PlanCardImgContainer = styled(Div)`
  width: 100%;
  height: 0;
  padding-bottom: 100%;

  position: relative;

  &:hover {
    cursor: pointer;
  }
`;
