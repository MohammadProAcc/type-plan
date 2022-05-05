import styled from 'styled-components';
import { Div } from '../Div';
import { Color, Padding } from 'styles';

export const PlanDetailsContainer = styled(Div)`
  width: 75%;
  border: solid 2px ${Color.Line};
  border-radius: 1rem;
  padding-bottom: ${Padding.l7};
  margin: 2rem auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 1.5rem;
  /* align-items: center; */

  overflow: hidden;
`;
