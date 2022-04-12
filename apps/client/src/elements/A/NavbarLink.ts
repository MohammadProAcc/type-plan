import styled from 'styled-components';
import { Color, FontSize } from 'styles';
import { FontFamily } from 'styles/design/FontFamily';
import { Activable } from 'types/interfaces/props/Activable';
import { A } from '.';

export const NavbarLink = styled(A)<NavbarLinkProps>`
  height: 100%;
  padding: 0 0.5rem;
  margin-left: 1rem;

  position: relative;

  font-size: ${FontSize.xl};
  font-family: ${FontFamily.regular};

  transition: 0.125s ease-in-out;

  display: flex;
  align-items: center;

  &:hover {
    ::after {
      width: calc(100% - 1rem);
    }
  }

  &::after {
    content: ' ';
    width: ${(props) => (props.active ? 'calc(100% - 1rem)' : '0')};
    height: 0.125rem;
    border-radius: 0.0625rem;

    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;

    background-color: ${Color.SecondaryLine};

    transition: width 0.5s;
  }
`;

export interface NavbarLinkProps extends Activable {}
