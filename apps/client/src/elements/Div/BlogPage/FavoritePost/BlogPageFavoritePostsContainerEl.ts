import styled from 'styled-components';
import { Div } from 'elements/Div/Div';
import { Margin } from 'styles';

export const BlogPageFavoritePostsContainerEl = styled(Div)`
  grid-row: 2 / span 1;
  grid-column: 4 / span 1;
  display: flex;
  flex-direction: column;
  /* margin-right: ${Margin.l5}; */
`;
