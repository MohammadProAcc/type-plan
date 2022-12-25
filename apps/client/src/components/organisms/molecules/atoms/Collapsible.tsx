import { TriangleSvg } from "components";
import { Card } from "elements";
import { useRef, useState } from "react";
import styled from "styled-components";
import { FontFamily, Zindex } from "styles";
import { Stylable } from "types";

export const Collapsible: React.FC<CollapsibleProps> = (
  { children, title, Style, AdditionalComponent },
) => {
  const [active, setActive] = useState(true);

  const titleRef = useRef<HTMLDivElement>(null);

  return (
    <Component
      Style={Style}
    >
      <Title
        ref={titleRef}
        onClick={() => setActive(_curr => !_curr)}
      >
        <TitleInnerContainer>
          {title}
          <TriangleSvg
            direction={active ? "up" : "down"}
            flip
          />
        </TitleInnerContainer>
        {AdditionalComponent && AdditionalComponent}
      </Title>

      {active && (
        <PaddingDiv>
          {children}
        </PaddingDiv>
      )}
    </Component>
  );
};

export interface CollapsibleProps extends Stylable {
  title: any;
  additionalCallback?: any;
  AdditionalComponent?: any;
}

const Component = styled(Card)<Stylable>`
  ${props => props.Style}
  padding: 0;
`;

const PaddingDiv = styled.div`
  padding: 0.2rem 1.2rem 1.5rem 1.2rem;
`;

const Title = styled.div`
  position: relative;
  z-index: ${Zindex.collapsibleTitle};
  padding: 1rem;
  
  width: 100%;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const TitleInnerContainer = styled.div`
  width: 100%;

  font-family: ${FontFamily.bold};
  
  display: flex;
  justify-content: space-between;
`;
