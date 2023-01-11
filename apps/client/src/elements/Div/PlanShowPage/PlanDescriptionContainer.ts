import styled from "styled-components";
import { Color } from "styles";
import { Div } from "../Div";

export const PlanDescriptionContainer = styled(Div)`
  display: flex;
  flex-direction: column;
  flex: 4;
    min-width: 15rem;
    margin-top: 1rem;
  min-height: 8rem;
  border: solid 1px ${Color.Line};
  border-radius: 0.9rem;
  overflow: hidden;
`;
