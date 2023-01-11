import styled from "styled-components";
import { Breakpoint } from "styles";
import { Div } from "../Div";

export const LayoutChildrenContainer = styled(Div)`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-contet: center;
  align-items: center;
`;
