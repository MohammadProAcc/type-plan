import styled from "styled-components";
import { Color, FontSize } from "styles";
import { Div } from "../Div";

export const PlanInformationEl = styled(Div)`
  display: flex;
  padding: 0.7rem 0 0 0;
  margin: 0 1rem;
  font-size: ${FontSize.md};

  :not(:last-child) {
    border-bottom: solid 1px ${Color.Line};
  }
`;
