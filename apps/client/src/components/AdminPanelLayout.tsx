import {
  AdminPanelChildrenContainer,
  AdminPanelContentContainer,
  AdminPanelLayoutContainer,
} from "elements";
import React from "react";
import {
  AdminPanelHeader,
  LayoutNavbar,
  AdminPanelSidebar,
} from "./organisms";

export const AdminPanelLayout: React.FC<AdminPanelLayoutProps> = (
  { title, createButtonLabel, children },
) => {
  return (
    <AdminPanelLayoutContainer>
      <LayoutNavbar />

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
  );
};

export interface AdminPanelLayoutProps {
  title?: string;
  createButtonLabel?: string;
}
