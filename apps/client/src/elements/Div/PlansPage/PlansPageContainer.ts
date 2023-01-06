import styled from "styled-components";
import { Device } from "styles";
import { Div } from "../Div";

export const PlansPageContainer = styled(Div)`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (${Device.laptop}) {
    padding: 2rem 0;
    
    flex-direction: row;
    align-items: flex-start;
    column-gap: 2rem;
  }
`;
