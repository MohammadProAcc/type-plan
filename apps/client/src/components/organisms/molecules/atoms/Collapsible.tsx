import { TriangleSvg } from "components";
import { Card } from "elements";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { FontFamily } from "styles";
import { Activable, Stylable } from "types";

const collapseIconStyle = css`
  margin-right: auto;
`;

export const Collapsible: React.FC<CollapsibleProps> = (
  { children, title, Style },
) => {
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState(false);

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
    <Component Style={Style}>
      <Title onClick={() => setActive(_curr => !_curr)}>
        {title}
        <TriangleSvg
          direction={active ? "up" : "down"}
          Style={collapseIconStyle}
          flip
        />
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
}

const Component = styled(Card)<Stylable>`
  ${props => props.Style}
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  font-family: ${FontFamily.bold};

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
