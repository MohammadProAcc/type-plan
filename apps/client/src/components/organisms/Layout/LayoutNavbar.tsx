import { LoginButton, NavbarLogo } from "components";
import { LayoutNavbarContainer, NavbarLink } from "elements";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FQl_response_user_IUser, FQl_response_user_Level, getMe } from "state";

export const LayoutNavbar: React.FC = () => {
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState(false);

  const [cookies] = useCookies([process.env.TOKEN]);

  useEffect(() => {
    if (cookies[process.env.TOKEN]) {
      getMe({
        set: {},
        get: {
          level: 1,
        },
      }, cookies[process.env.TOKEN])
        .then((response) => {
          (response.body as Partial<FQl_response_user_IUser>).level?.includes(
            FQl_response_user_Level.Admin,
          ) && setIsAdmin(true);
        });
    }
  }, []);

  return (
    <LayoutNavbarContainer>
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

      <Link href="/admin" passHref>
        <NavbarLink
          deactive={!isAdmin}
          active={router?.route?.includes("admin")}
        >
          بخش مدیریت
        </NavbarLink>
      </Link>

      <LoginButton />
    </LayoutNavbarContainer>
  );
};
