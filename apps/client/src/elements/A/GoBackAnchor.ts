import styled from "styled-components";
import { Margin } from "styles";
import { A } from "./A";

export const GoBackAnchor = styled(A).attrs({
  title: "بازگشت به صفحه قبل",
})`
  min-width: 1.5rem;
  height: 1.5rem;
  margin-left: ${Margin.l6};

  display: inline-flex;

  background-image: url(/svg/goback.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;
