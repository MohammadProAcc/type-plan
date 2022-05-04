import { Div } from "../Div";
import styled from 'styled-components'
import { Device } from "styles";

export const PlansPageContainer = styled(Div)`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (${Device.desktop}) {
    padding: 2rem 0;
    
    flex-direction: row;
    align-items: flex-start;
    column-gap: 2rem;
  }
`;