import { AdminPanelSidebarAnchor } from 'elements'
import Link from 'next/link'
import React from 'react'
import { Activable } from 'types'

export const AdminPanelSidebarLink:React.FC<AdminPanelSidebarLinkProps> = ({
  active,
  href,
  children
}) => {
  return (
    <Link href={href} passHref>
      <AdminPanelSidebarAnchor 
        active={active}
        title={String(children)}
      >
        {children}
      </AdminPanelSidebarAnchor>
    </Link>
  )
}

export interface AdminPanelSidebarLinkProps extends Activable {
  href
}