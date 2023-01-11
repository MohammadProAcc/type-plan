import styled from "styled-components";
import { Border, Color, Device } from "styles";
import { Div } from "..";

export const LayoutNavbarContainer = styled(Div)`
  width: 100%;
  min-height: 2.5rem;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  border-bottom: ${Border("1px", Color.Line)};

  display: flex;
  flex-direction: column;

  background: ${Color.Background};
  @media (${Device.laptop}) {
    
    flex-direction: row;
  align-items: center;
  }
`;
