import styled from 'styled-components';
import { Margin, Padding, Color, FontSize, FontFamily } from 'styles';
import { Div } from 'elements/Div/Div';

export const BlogPageLastPostContent = styled(Div)`
  font-size: ${FontSize.sm};
  padding: ${Padding.l7} 0 ${Padding.l7} ${Padding.l3};
  border-top: solid 1px ${Color.BackgroundSecondary};
  border-bottom: solid 1px ${Color.BackgroundSecondary};
`;
