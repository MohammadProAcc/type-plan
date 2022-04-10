import { NavbarLogo } from "components";
import { LayoutNavbarContainer, NavbarLink } from "elements";
import { useRouter } from "next/router";

export const LayoutNavbar: React.FC = () => {
  const router = useRouter();

  return (
    <LayoutNavbarContainer>
      <NavbarLogo />

      <NavbarLink active={router?.route === "/"} href="/">
        خانه
      </NavbarLink>

      <NavbarLink active={router?.route?.includes("plans")} href="/plans">
        نقشه ها
      </NavbarLink>
    </LayoutNavbarContainer>
  );
};
