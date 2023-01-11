import styled from "styled-components";
import { Color } from "styles";
import { Div } from "../Div";
export const LoginCard = styled(Div)`
   display: flex;
 max-width: 20rem;
 justify-content: center;
  margin: 4rem auto;
  padding: 2rem;
  border: solid 1.5px ${Color.Line};
  border-radius: 0.5rem;
`;
