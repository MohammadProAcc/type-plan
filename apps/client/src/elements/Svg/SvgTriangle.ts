import styled from "styled-components";
import { TimeStep } from "styles";
import { Activable, Directional, Stylable } from "types";
import { Svg } from "./Svg";

interface SvgTriangleProps extends Activable, Stylable, Directional {
  flip?: boolean;
}
export const SvgTriangle = styled(Svg)<SvgTriangleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: ${TimeStep.mellow};

  transform: ${props =>
  props.direction === "up"
    ? props.flip ? "scaleY(-1)" : "rotate(-180deg)"
    : "0"};

  ${props => props.Style}
`;
