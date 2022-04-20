import React from 'react'
import { AdminCreatePlanForm, AdminPanelLayout } from '.'

export const AdminPanelCreatePlanPage:React.FC = () => {
  return (
    <AdminPanelLayout title="افزودن نقشه">
      <AdminCreatePlanForm />
    </AdminPanelLayout>
  )
}