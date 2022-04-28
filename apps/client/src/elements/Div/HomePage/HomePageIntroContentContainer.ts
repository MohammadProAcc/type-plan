import styled from "styled-components";
import { Device } from "styles";
import { Div } from "..";

export const HomePageIntroContentContainer = styled(Div)`
  width: 100%;

  @media (${Device.desktop}) {
    width: 50%;
    padding-left: 2rem;
  }
`;
