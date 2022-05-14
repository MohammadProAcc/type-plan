import { TriangleSvg } from "components";
import { Card } from "elements";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { FontFamily, Zindex } from "styles";
import { Activable, Stylable } from "types";

export const Collapsible: React.FC<CollapsibleProps> = (
  { children, title, Style, AdditionalComponent },
) => {
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState(false);

  const titleRef = useRef<HTMLDivElement>(null);

  const collapseRef = useRef<any>(null);

  useEffect(() => {
    const children = (collapseRef?.current as HTMLElement)?.children;
    for (let i = 0; i < children?.length; i++) {
      setHeight(_curr =>
        _curr +
        children[i]?.clientHeight +
        parseInt(window.getComputedStyle(children[i])?.marginBottom) +
        parseInt(window.getComputedStyle(children[i])?.marginTop) +
        parseInt(window.getComputedStyle(children[i])?.paddingTop) +
        parseInt(window.getComputedStyle(children[i])?.paddingBottom) +
        8
      );
    }
  }, []);

  return (
    <Component
      Style={Style}
    >
      <Title
        ref={titleRef}
      >
        <TitleInnerContainer
          onClick={() => setActive(_curr => !_curr)}
        >
          {title}
          <TriangleSvg
            direction={active ? "up" : "down"}
            flip
          />
        </TitleInnerContainer>
        {AdditionalComponent && AdditionalComponent}
      </Title>

      <CollapsibleDiv
        ref={collapseRef}
        active={active}
        height={`${active ? height : 0}px`}
      >
        {children}
      </CollapsibleDiv>
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
`;

const Title = styled.div`
  position: relative;
  z-index: ${Zindex.collapsibleTitle};
  
  width: 100%;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

interface CollapsibleDivProps extends Activable {
  height: string;
}

const CollapsibleDiv = styled.div<CollapsibleDivProps>`
  height: ${props => props.height};

  overflow: hidden;
`;

const TitleInnerContainer = styled.div`
  width: 100%;

  font-family: ${FontFamily.bold};
  
  display: flex;
  justify-content: space-between;
`;
