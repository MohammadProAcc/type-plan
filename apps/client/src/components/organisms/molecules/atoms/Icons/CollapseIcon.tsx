import styled from "styled-components";
import { Color, TimeStep } from "styles";
import { Activable, Flexible, Stylable } from "types";

interface CollapseIconProps extends Flexible, Activable, Stylable { }

export const CollapseIcon: React.FC<CollapseIconProps> = ({
  width,
  height,
  active,
  Style
}) => {
  return (
    <Container
      width={width}
      height={height}
      Style={Style}
      active={active}
    >
      <Line />
      <Line active={active} />
      <Line />
    </Container>
  );
};

interface ContainerProps extends Stylable, Flexible, Activable { }
const Container = styled.div<ContainerProps>`
  min-width: ${props => props.width ? props.width : "1.5rem"};
  max-width: ${props => props.width ? props.width : "1.5rem"};
  height: ${props => props.height ? props.height : "1.5rem"};

  transition: ${TimeStep.mellow} ease-in-out;

  ${props => props.Style}
`;

interface LineProps extends Activable, Flexible { }

const Line = styled.div<LineProps>`
  min-width: ${props => props.width ? props.width : "1.5rem"};
  height: 0.0625rem;

  background-color: ${Color.Line};

  transition: ${TimeStep.mellow} ease-in-out;
`;
