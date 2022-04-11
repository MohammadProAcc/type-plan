import { NavbarLogoAnchor, NavbarLogoImg } from "elements";
import Link from "next/link";

export const NavbarLogo: React.FC = () => {
  return (
    <Link href="/">
      <NavbarLogoAnchor>
        <NavbarLogoImg />
      </NavbarLogoAnchor>
    </Link>
  );
};
