import { Button } from '../Button';
import styled from 'styled-components';

export const PlanCardButton = styled(Button).attrs({
  pure: true,
})`
  display: flex;
  flex-direction: column;

  transition: 0.25s;
  opacity: ${(props) => (props.active ? '1' : '0')};
`;
