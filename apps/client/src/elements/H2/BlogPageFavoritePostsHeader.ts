import styled from 'styled-components';
import { Margin, Padding, Color, Radius, FontSize } from 'styles';
import { H2 } from '.';

export const BlogPageFavoritePostsHeader = styled(H2)`
  background-color: ${Color.BackgroundSecondary};
  border-radius: ${Radius.l7};
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: ${Padding.l1} 0;
  font-weight: bolder;
  font-size: ${FontSize.xl};
`;
