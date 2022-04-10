import styled from "styled-components";
import { Color } from "styles";
import { Div } from "./Div";

export const LayoutContainer = styled(Div)`
  width: 100%;
  min-height: 100vh;

  background-color: ${Color.Background};
`;
