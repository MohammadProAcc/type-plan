import styled from 'styled-components';
import { Div } from '../Div';
import { Color, FontSize } from 'styles';

export const PlanInformation = styled(Div)`
  display: flex;
  border-bottom: solid 1px ${Color.BorderLight};
  border-radius: 0.5rem;
  padding: 0.7rem 0 0 0;
  margin: 0 1rem;
  font-size: ${FontSize.md};
`;
