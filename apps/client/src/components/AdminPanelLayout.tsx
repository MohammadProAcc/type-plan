import { AdminPanelChildrenContainer, AdminPanelContentContainer, AdminPanelLayoutContainer } from 'elements'
import React from 'react'
import { AdminPanelSidebar } from './organisms'

export const AdminPanelLayout:React.FC = ({children}) => {
  return (
    <AdminPanelLayoutContainer>
      <AdminPanelContentContainer>

        <AdminPanelSidebar />
        
        <AdminPanelChildrenContainer>
          {children}
        </AdminPanelChildrenContainer>
      
      </AdminPanelContentContainer>
    </AdminPanelLayoutContainer>
  )
}