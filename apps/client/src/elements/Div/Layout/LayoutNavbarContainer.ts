import styled from "styled-components";
import { Border, Color } from "styles";
import { Div } from "..";

export const LayoutNavbarContainer = styled(Div)`
  width: 100%;
  height: 3.5rem;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  border-bottom: ${Border("1px", Color.Line)};

  display: flex;
  align-items: center;

  background: ${Color.Background};
`;
