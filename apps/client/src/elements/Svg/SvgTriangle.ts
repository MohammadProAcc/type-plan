import styled from 'styled-components'
import { Svg } from './Svg';
import { Activable, Directional, Stylable } from "types"
import { TimeStep } from 'styles';

interface SvgTriangleProps extends Activable, Stylable, Directional { }
export const SvgTriangle = styled(Svg) <SvgTriangleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: ${TimeStep.mellow};

  transform: rotate(${props => props.direction === "up" ? "-180deg" : "0"});

  ${props => props.Style}
`;
