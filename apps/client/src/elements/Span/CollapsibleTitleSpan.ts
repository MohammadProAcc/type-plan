import styled from "styled-components";
import { FontFamily } from "styles";
import { Span } from "./Span";

export const CollapsibleTitleSpan = styled(Span)`
  width: 100%;

  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  font-family: ${FontFamily.bold};

  &:hover {
    cursor: pointer;
  }
`;
