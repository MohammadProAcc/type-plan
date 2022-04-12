import styled from 'styled-components';
import { Color } from 'styles';
import { Div } from '../Div';

export const PlanCardContainer = styled(Div)`
  width: 19rem;
  height: 25rem;

  display: flex;
  flex-direction: column;

  background-color: ${Color.BackgroundLight};

  transition: 0.25s;

  &:hover {
    box-shadow: 0 0.125rem 1rem ${Color.DarkLine};
  }
`;
