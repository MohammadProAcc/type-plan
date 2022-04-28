import { AdminPanelNavbarContainer, NavbarLink } from "elements";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LoginButton, NavbarLogo } from "../molecules";

export const AdminPanelNavbar: React.FC = () => {

  const router = useRouter();
  
  return (
    <AdminPanelNavbarContainer>
      <NavbarLogo />

      <Link href="/" passHref>
        <NavbarLink active={router?.route === "/"} href="/">
          خانه
        </NavbarLink>
      </Link>

      <Link href="/plans" passHref>
        <NavbarLink active={router?.route?.includes("plans")}>
          نقشه ها
        </NavbarLink>
      </Link>

      <LoginButton />
    </AdminPanelNavbarContainer>
  );
};
