import styled from "styled-components";
import { Radius } from "styles";
import { Img } from "../Img";

export const PlanLargeImg = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: ${Radius.l2};

  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
`;
