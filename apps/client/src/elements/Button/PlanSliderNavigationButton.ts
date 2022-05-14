import { Button } from "./Button";
import styled from 'styled-components'
import { Directional } from "types";
import { Radius, TimeStep } from "styles";


export const PlanSliderNavigationButton = styled(Button).attrs({
  pure: true
}) <Required<Directional>>`
  width: 3rem;
  height: 100%;
  border-radius: ${props => props.direction === "right" ? `0 ${Radius.l2} ${Radius.l2} 0` : `${Radius.l2} 0 0 ${Radius.l2}`};

  position: absolute;
  top: 0;
  right: ${props => props.direction === "right" ? "0" : "auto"};
  left: ${props => props.direction === "left" ? "0" : "auto"};

  background-color: rgba(0,0,0,0.2);
  background-image: url(/svg/chevron-${props => props.direction}.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  transition: ${TimeStep.quick};

  &:hover {
    background-color: rgba(0,0,0,0.5);
  }
`