import styled from 'styled-components';
import { Div } from '../Div';
import { Color } from 'styles';

export const PlanDetailsContainer = styled(Div)`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  width: 75%;
  border: solid 2px ${Color.Border};
  border-radius: 1rem;
  margin: 2rem auto;
  overflow: hidden;
`;
