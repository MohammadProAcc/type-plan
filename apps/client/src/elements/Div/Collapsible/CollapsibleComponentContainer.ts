import { Div } from "../Div";
import styled from 'styled-components'
import { Flexible, Stylable } from "types";
import { Color, Radius } from "styles";

interface CollapsibleContainerProps extends Flexible, Stylable { }

export const CollapsibleComponentContainer = styled(Div) <CollapsibleContainerProps>`
  width: ${props => props.autoWidth ? "auto" : "100%"};
  border-radius: ${Radius.l1};

  position: sticky;
  top: 1rem;

  display: flex;
  flex-direction: column;

  background-color: ${Color.Background};

  ${props => props.Style}
`;