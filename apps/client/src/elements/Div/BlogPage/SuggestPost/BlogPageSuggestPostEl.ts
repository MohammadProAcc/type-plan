import { Div } from 'elements/Div/Div';
import styled from 'styled-components';
import { Color, Margin, Padding, Radius } from 'styles';

export const BlogPageSuggestPostEl = styled(Div)`
  /* grid-column: 4 / span 1; */
  display: flex;
  flex-direction: column;
  /* width: 23%; */
  padding: ${Padding.l2};

  box-shadow: 0.1rem 0.1rem 0.5rem gray;
  /* border: solid 1px ${Color.Line}; */
  border-radius: ${Radius.l3};
`;
