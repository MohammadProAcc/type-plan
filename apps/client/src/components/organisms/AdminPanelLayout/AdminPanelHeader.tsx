import { AdminHeaderCreateButton, AdminHeaderCreateButtonAnchor, AdminPageTitle, AdminPanelHeaderContainer } from 'elements'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

export const AdminPanelHeader:React.FC<AdminPanelHeaderProps> = ({ title, createButtonLabel }) => {

  const router = useRouter();

  return (
    <AdminPanelHeaderContainer>

      <AdminPageTitle>{title}</AdminPageTitle>

      {
        createButtonLabel && (
          <Link href={{pathname: router.pathname + "/create"}} passHref>
            <AdminHeaderCreateButtonAnchor>
              <AdminHeaderCreateButton>
                {createButtonLabel}
              </AdminHeaderCreateButton>
            </AdminHeaderCreateButtonAnchor>
          </Link>
        )
      }
    </AdminPanelHeaderContainer>
  )
}

export interface AdminPanelHeaderProps {
  title?: string;
  createButtonLabel?: string;
}