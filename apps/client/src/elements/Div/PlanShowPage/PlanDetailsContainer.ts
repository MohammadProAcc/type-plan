import styled from "styled-components";
import { Color, Device, Padding } from "styles";
import { Div } from "../Div";

export const PlanDetailsContainer = styled(Div)`
  max-width: 65rem;
  border: solid 2px ${Color.Line};
  border-radius: 1rem;
  padding-bottom: ${Padding.l7};
  margin: 2rem;

  display: flex;
    flex-direction: column;
  justify-content: space-around;
  row-gap: 1.5rem;
  /* align-items: center; */

  overflow: hidden;
  @media (${Device.laptop}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
