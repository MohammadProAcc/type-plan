import styled from 'styled-components';
import { Media } from 'types';

export const Img = styled.img.attrs<ImgProps>((props) => ({
  src: props.Src ? props.Src : props.src,
}))<ImgProps>``;

export type ImgProps = Media;
