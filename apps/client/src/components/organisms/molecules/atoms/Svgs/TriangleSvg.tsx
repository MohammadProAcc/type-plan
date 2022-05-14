import { SvgTriangle } from "elements";
import React from "react";
import { Directional, Flexible, Stylable } from "types";

interface TriangleSvgProps extends Directional, Stylable, Flexible {
  flip?: boolean;
}

export const TriangleSvg: React.FC<TriangleSvgProps> = ({
  direction,
  flip,
  Style,
  width = "1rem",
  height = "1.5rem",
}) => {
  return (
    <SvgTriangle
      direction={direction}
      flip={flip}
      Style={Style}
      width={width}
      height={height}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 404.257 404.257"
      xmlSpace="preserve"
    >
      <defs>
        <style>enable-background:new 0 0 404.257 404.257;</style>
      </defs>
      <polygon points="386.257,114.331 202.128,252.427 18,114.331 0,138.331 202.128,289.927 404.257,138.331 " />
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </SvgTriangle>
  );
};
