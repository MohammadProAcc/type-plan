import styled from "styled-components";
import { Device } from "styles";
import { Div } from "../Div";

export const PaginationBarContainer = styled(Div)`
  width: 100%;
  height: 3rem;

  display: flex;
  column-gap: 0.5rem;

  @media (${Device.desktop}) {
    height: 4rem;
  }
`;
