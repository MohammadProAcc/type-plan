import styled from 'styled-components';
import { Div } from 'elements/Div/Div';
import { Color, FontSize, Padding } from 'styles';

export const BlogPageLastPostFooter = styled(Div)`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  font-size: ${FontSize.sm};
  padding: ${Padding.l7} 0 ${Padding.l2} 0;
`;
