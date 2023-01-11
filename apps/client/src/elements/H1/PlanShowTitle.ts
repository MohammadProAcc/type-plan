import styled from "styled-components";
import { Color, FontSize } from "styles";
import { H1 } from "./H1";

export const PlanShowTitle = styled(H1)`
  background-color: ${Color.BackgroundSecondary};
  padding: 0.5rem 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  
  font-size: ${FontSize.h6};
`;
