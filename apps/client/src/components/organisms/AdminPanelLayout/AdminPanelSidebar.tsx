import { AdminPanelSidebarTitle, AdminPanelSidebarContainer } from 'elements'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { AdminPanelSidebarLink } from '../molecules';

export const AdminPanelSidebar:React.FC = () => {

  const router = useRouter();

  const checkLinkActivition = (key: string, exact?: boolean) =>
    exact
      ? router.route === key
      : router.route.includes(key)

  return (
    <AdminPanelSidebarContainer>
      <AdminPanelSidebarTitle>بخش مدیریت</AdminPanelSidebarTitle>
      
      <AdminPanelSidebarLink
        href="/admin"
        active={checkLinkActivition("/admin", true)}
      >
        داشبورد
      </AdminPanelSidebarLink>

      <AdminPanelSidebarLink
        href="/admin/plans"
        active={checkLinkActivition("/admin/plans")}
      >
        نقشه ها
      </AdminPanelSidebarLink>
    </AdminPanelSidebarContainer>
  )
}