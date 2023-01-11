import styled from "styled-components";
import { Color } from "styles";
import { Div } from "../Div";

export const PlanInformationContainer = styled(Div)`
  flex: 3;
    min-width: 15rem;
  border: solid 1px ${Color.Line};
  border-radius: 0.9rem;
  
  display: flex;
  flex-direction: column;

    margin-top: 1rem;
  overflow: hidden;
`;
