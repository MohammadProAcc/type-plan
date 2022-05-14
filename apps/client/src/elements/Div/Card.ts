import styled, { css } from "styled-components";
import { Color } from "styles";
import { Flexible } from "types";
import { Div } from "./Div";

export const Card = styled(Div)<CardProps>`
  width: ${props => props.fullWidth ? "100%" : "auto"};
  padding: 1rem;
  border-radius: .25rem;

  display: flex;
  flex-direction: column;

  background-color: ${Color.Background};
  box-shadow: 0 .125rem 1rem ${Color.Background};
`;

export const cardStyles = css<CardProps>`
  padding: .25rem;
  border-radius: .25rem;

  background-color: ${Color.Background};
  box-shadow: 0 .125rem 1rem ${Color.Background};
`;

export interface CardProps extends Flexible {}
