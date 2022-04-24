import styled from 'styled-components';
import { Div } from '../Div';
import { Color } from 'styles';

export const PlanDescriptionContainer = styled(Div)`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 1rem auto;
  border: solid 1px ${Color.Border};
  border-radius: 0.9rem;
  overflow: hidden;
`;
