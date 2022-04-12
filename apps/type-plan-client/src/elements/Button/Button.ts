import styled, { css } from 'styled-components';
import { Color, FontSize } from 'styles';
import { FontFamily } from 'styles/design/FontFamily';
import { Activable } from 'types/interfaces/props/Activable';

export const Button = styled.button<ButtonProps>`
  border: 1px solid ${Color.PrimaryLine};
  border-radius: 1.5rem;
  padding: 0.25rem 1rem;

  font-size: ${FontSize.lg};
  font-family: ${FontFamily.medium};
  color: ${Color.PrimaryLine};
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.25s ease-in-out;

  &:hover {
    background-color: ${Color.BackgroundBlue};
  }

  ${(props) =>
    props.pure &&
    css`
      border: none;
      background-color: transparent;
      &:hover {
        background-color: transparent;
      }
    `}
`;

export interface ButtonProps extends Activable {
  primary?: boolean;
  pure?: boolean;
}
