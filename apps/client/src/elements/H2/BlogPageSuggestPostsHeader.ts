import styled from 'styled-components';
import { Margin, Padding, Color, Radius, FontSize } from 'styles';
import { H2 } from '.';

export const BlogPageSuggestPostsHeader = styled(H2)`
  grid-column: 1 / span 4;
  background-color: ${Color.BackgroundSecondary};
  border-radius: ${Radius.l7};
  /* text-align: center; */
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: ${Padding.l1} ${Padding.l4};
  font-weight: bolder;
  font-size: ${FontSize.xl};
`;
