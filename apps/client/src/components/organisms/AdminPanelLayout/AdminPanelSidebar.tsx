import { AdminPanelSidebarTitle, AdminPanelSidebarContainer } from 'elements'
import { useRouter } from 'next/router'
import React from 'react'
import { AdminPanelSidebarLink } from '../molecules';

export const AdminPanelSidebar:React.FC = () => {

  const router = useRouter();

  const checkLinkActivition = (key: string) =>
    router.route.includes(key)
  
  return (
    <AdminPanelSidebarContainer>
      <AdminPanelSidebarTitle>بخش مدیریت</AdminPanelSidebarTitle>
      
      <AdminPanelSidebarLink
        href="/admin"
        active={checkLinkActivition("/")}
      >
        داشبورد
      </AdminPanelSidebarLink>
    </AdminPanelSidebarContainer>
  )
}