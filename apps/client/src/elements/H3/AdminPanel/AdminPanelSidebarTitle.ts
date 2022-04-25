import styled from 'styled-components'
import { Border, Color, FontFamily, FontSize, Padding } from 'styles'
import { Margin } from 'styles/design/Margin'
import { H3 } from '../H3'

export const AdminPanelSidebarTitle = styled(H3)`
  padding-bottom: ${Padding.l4};
  border-bottom: ${Border("0.125rem", Color.Line)};
  margin-bottom: ${Margin.l4};
  
  font-size: ${FontSize.xxl};
  font-family: ${FontFamily.medium};
  text-align: center;
`