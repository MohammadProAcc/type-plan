import styled from 'styled-components';

import { Color, Padding, Margin, Radius } from 'styles';
import { Div } from 'elements/Div/Div';

export const BlogPageLastPostEl = styled(Div)`
  display: flex;
  /* justify-content: space-between; */
  /* width: 100%; */
  margin: 0 0 ${Margin.l5} 0;
  padding: ${Padding.l5} 2.5rem ${Padding.l5} ${Padding.l3};
  /* border: solid 1px ${Color.Line}; */
  box-shadow: 0.1rem 0.1rem 0.5rem gray;
  border-radius: ${Radius.l3};
`;
