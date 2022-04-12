import styled from 'styled-components';
import { Img } from '../Img';

export const PlanCardImage = styled(Img).attrs({
  src: "/svg/plan.svg"
})`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
`;
