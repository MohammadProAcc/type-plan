import styled from 'styled-components';
import { Color } from 'styles';
import { Button } from './Button';

export const LoginButton = styled(Button)`
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  border-width: 0.0625rem;
  border-radius: 1.5rem;

  &:hover {
    border-color: transparent;

    background-color: ${Color.BackgroundSecondary};
  }
`;
