import styled from "styled-components";
import { Activable, Flexible, Stylable } from "types";

interface SvgProps extends Flexible, Activable, Stylable {}

export const Svg = styled.svg<SvgProps>`
  ${props => props.Style}
`;
