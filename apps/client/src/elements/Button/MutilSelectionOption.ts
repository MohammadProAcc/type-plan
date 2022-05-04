import styled, { css } from "styled-components";
import { Activable } from "types"
import { Color, FontFamily, FontSize, TimeStep } from "styles";

export const MultiSelectionOption = styled.button <Activable>`
  flex: 1;
  height: 100%;

  font-size: ${FontSize.lg};
  font-family: ${FontFamily.medium};

  transition: ${TimeStep.quick};

  ${props => props.active && css`
    background-color: ${Color.Line};
    color: ${Color.Background};
  `}
`;
