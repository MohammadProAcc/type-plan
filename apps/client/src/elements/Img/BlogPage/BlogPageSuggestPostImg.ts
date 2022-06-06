import styled from 'styled-components';
import { Radius } from 'styles';
import { Img } from '../Img';

export const BlogPageSuggestPostImg = styled(Img).attrs({
  src: '/png/BlogLastPostImg.png',
  title: 'تصویر پست',
  alt: 'تصویر پست',
})`
  border-radius: ${Radius.l3};
  /* min-width: 10rem; */
  max-width: 100%;
  /* height: auto; */
  object-fit: cover;
`;
