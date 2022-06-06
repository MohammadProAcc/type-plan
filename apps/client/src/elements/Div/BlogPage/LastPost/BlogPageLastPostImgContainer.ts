import styled from 'styled-components';
import { Border, Color, Radius, Margin } from 'styles';
import { Div } from 'elements/Div/Div';

export const BlogPageLastPostImgContainer = styled(Div)`
  display: flex;
  margin-right: ${Margin.l7};
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
