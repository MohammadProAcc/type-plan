import { Div } from "../Div";
import styled from 'styled-components'
import { Color } from "styles";

export const AdminPanelNavbarContainer = styled(Div)`
  width: 100%;
  height: 5rem;
  padding: 0 1.5rem;
  
  display: flex;
  align-items: center;
  
  background-color: ${Color.BackgroundSecondary};
`;