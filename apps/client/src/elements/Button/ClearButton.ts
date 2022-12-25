import styled from "styled-components";
import { Zindex } from "styles";
import { Activable } from "types";
import { Button } from "./Button";

export const ClearButton = styled(Button).attrs({
  pure: true,
})<Activable>`
  height: 1.5rem;

  position: absolute;
  top: 1.8rem;
  left: 1.8rem;
  transform: translateY(-50%);
  z-index: ${Zindex.clearButton};

  display: ${props => props.active ? "inline-flex" : "none"};
 `;
