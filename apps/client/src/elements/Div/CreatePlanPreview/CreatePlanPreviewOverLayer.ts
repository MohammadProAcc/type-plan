import { Div } from "../Div";
import styled from 'styled-components'
import { TimeStep } from "styles";

export const CreatePlanPreviewOverLayer = styled(Div)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  transition-duration: ${TimeStep.quick};

  background-repeat: no-repeat;
  background-size: 3rem;
  background-position: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(0,0,0, 0.25);
    background-image: url(/svg/remove.svg);
  }
`;