import styled from "styled-components";
import { Color } from "styles";
import { Div } from "../Div";

export const PlanInformationContainer = styled(Div)`
  width: 30%;
  border: solid 1px ${Color.Line};
  border-radius: 0.9rem;
  margin: 1rem;
  
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;
