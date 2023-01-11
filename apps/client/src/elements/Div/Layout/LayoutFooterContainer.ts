import styled from "styled-components";
import { Color } from "styles";
import { Div } from "..";

export const LayoutFooterContainer = styled(Div)`
  width: 100%;
  min-height: 2.5rem;
  margin-top: auto;
  line-height: 2.5rem;
  display: flex;
  color: #03378a;
  justify-content: space-around;
  flex-wrap: wrap;
  border-top: 2px solid goldenrod;
  font-size: 0.9rem;
  background: ${Color.BackgroundSecondary};
`;
