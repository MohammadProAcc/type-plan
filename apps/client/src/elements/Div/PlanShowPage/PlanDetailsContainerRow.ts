import styled from "styled-components";
import { Device } from "styles";
import { Div } from "../Div";

export const PlanDetailsContainerRow = styled(Div)`
  width: 100%;

  display: flex; 
    flex-direction: column;
    padding: 0 1rem;
  column-gap: 1.5rem;
    margin-top: 1rem;
  @media (${Device.laptop}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
