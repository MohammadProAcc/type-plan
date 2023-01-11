import styled from "styled-components";
import { Color, Device, FontSize } from "styles";
import { FontFamily } from "styles/design/FontFamily";
import { Activable } from "types";
import { A } from ".";

export const NavbarLink = styled(A)<Activable>`
  height: 2.2rem;
  min-width: 4.5rem;
  text-align: center;
  padding: 0 1rem;
  margin-top: 1rem;
  border-radius: 0.75rem;

  position: ${props => props.fixed ? "absolute" : "relative"};
  left: ${props => props.fixed ? "1rem" : ""};

  font-size: 1.1rem;
  font-family: ${FontFamily.light};

  background-color: ${props => props.active && Color.BackgroundSecondary};
  border: 1px solid goldenrod;
    border-color: ${props => props.lefSide ? Color.Text : Color.LineSecondary};

  transition: 0.125s ease-in-out;

  display: ${props => props.deactive ? "none" : "flex"};
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${Color.BackgroundSecondary};
  }
  
  @media (${Device.laptop}) {
    
  margin-left: 1rem;
  margin-right: ${props => props.lefSide ? "auto" : "1rem"};
  margin-top: 0; 
    
  }
`;
