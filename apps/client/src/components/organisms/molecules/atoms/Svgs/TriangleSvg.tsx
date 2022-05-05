import { SvgTriangle } from "elements";
import React from "react";
import { Directional, Stylable } from "types";

interface TriangleSvgProps extends Directional, Stylable {
  flip?: boolean;
}

export const TriangleSvg: React.FC<TriangleSvgProps> = ({
  direction,
  flip,
  Style,
}) => {
  return (
    <SvgTriangle
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      Style={Style}
      direction={direction}
      flip={flip}
    >
      <path
        fill="#494c4e"
        fillRule="evenodd"
        d="M23.541 3.28l-10 12a2.007 2.007 0 0 1-3.08 0l-10-12A2 2 0 0 1 2 0h20a2 2 0 0 1 1.541 3.28z"
      />
    </SvgTriangle>
  );
};
