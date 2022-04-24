import styled from 'styled-components';
import { Div } from '../Div';
import { Color } from 'styles';

export const PlanInformationContainer = styled(Div)`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 1rem;
  border: solid 1px ${Color.Border};
  border-radius: 0.9rem;
  overflow: hidden;
`;
