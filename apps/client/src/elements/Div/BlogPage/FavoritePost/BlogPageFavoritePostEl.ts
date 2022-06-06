import { Div } from 'elements/Div/Div';
import styled from 'styled-components';
import { Color, Margin, Padding, Radius } from 'styles';

export const BlogPageFavoriteEl = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${Margin.l3};
  padding: ${Padding.l2} ${Padding.l3};
  /* border: solid 1px ${Color.Line}; */
  box-shadow: 0.1rem 0.1rem 0.5rem gray;
  border-radius: ${Radius.l3};
`;
