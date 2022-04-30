import styled from 'styled-components';
import { Color, Shadow } from 'styles';
import { Div } from '../Div';

export const PlanCardContainer = styled(Div)`
  width: 19rem;
  height: 25rem;
  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;

  background-color: ${Color.BackgroundSecondary};

  transition: 0.25s;

  &:hover {
    box-shadow: ${Shadow.primary};
  }
`;
