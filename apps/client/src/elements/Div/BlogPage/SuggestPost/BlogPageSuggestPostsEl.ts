import styled from 'styled-components';
import { Div } from 'elements/Div/Div';

export const BlogPageSuggestPostsEl = styled(Div)`
  grid-column: 1 / span 4;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4 1fr);
`;
