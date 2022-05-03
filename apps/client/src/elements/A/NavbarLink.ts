import styled from 'styled-components';
import { Color, FontSize } from 'styles';
import { FontFamily } from 'styles/design/FontFamily';
import { Activable } from 'types';
import { A } from '.';

export const NavbarLink = styled(A) <Activable>`
  height: 3rem;
  padding: 0 1rem;
  margin-left: 1rem;
  border-radius: 0.75rem;

  position: relative;

  font-size: ${FontSize.xl};
  font-family: ${FontFamily.regular};

  background-color: ${props => props.active && Color.BackgroundSecondary};

  transition: 0.125s ease-in-out;

  display: ${props => props.deactive ? "none" : "flex"};
  align-items: center;

  &:hover {
    background-color: ${Color.BackgroundSecondary};
  }
`;
