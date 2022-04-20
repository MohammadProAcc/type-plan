import { AdminPanelChildrenContainer, AdminPanelContentContainer, AdminPanelLayoutContainer } from 'elements'
import React from 'react'
import { AdminPanelHeader, AdminPanelSidebar } from './organisms'

export const AdminPanelLayout:React.FC<AdminPanelLayoutProps> = ({title, createButtonLabel, children}) => {

  return (
    <AdminPanelLayoutContainer>
      <AdminPanelContentContainer>

        <AdminPanelSidebar />
        
        <AdminPanelChildrenContainer>
          <AdminPanelHeader 
            title={title} 
            createButtonLabel={createButtonLabel}
          />
          {children}
        </AdminPanelChildrenContainer>
      
      </AdminPanelContentContainer>
    </AdminPanelLayoutContainer>
  )
}

export interface AdminPanelLayoutProps {
  title?: string;
  createButtonLabel?: string;
}