import styled from "styled-components";
import { Media } from "types";

export const imgPath = process.env.NODE_ENV === "development"
  ? "http://localhost:8000/"
  : "http://eyvan.satek.ir/statics/";

export const Img = styled.img.attrs<ImgProps>((props) => ({
  src: props.Src ? (imgPath + props.Src) : props.src,
}))<ImgProps>``;

export type ImgProps = Media;
