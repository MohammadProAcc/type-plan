import { LoginButton, NavbarLogo } from "components";
import { LayoutNavbarContainer, NavbarLink } from "elements";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FQl_response_user_Level, getMe, InitialState, useStore } from "state";

export const LayoutNavbar: React.FC = () => {
  const router = useRouter();

  const [cookies] = useCookies([process.env.TOKEN]);

  const {
    me,
  } = useStore((store: InitialState) => ({
    me: store?.me,
  }));

  useEffect(() => {
    if (
      cookies[process.env.TOKEN] && cookies[process.env.TOKEN] !== "undefined"
    ) {
      getMe(
        {
          set: {},
          get: {
            level: 1,
            name: 1,
            _id: 1,
            lastName: 1,
          },
        },
        cookies[process.env.TOKEN],
      );
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

      <Link href="/blog" passHref>
        <NavbarLink active={router?.route?.includes("blog")}>
          وبلاگ
        </NavbarLink>
      </Link>

      <Link href="/admin" passHref>
        <NavbarLink
          deactive={!me.data.level.includes(FQl_response_user_Level.Admin)}
          active={router?.route?.includes("admin")}
        >
          بخش مدیریت
        </NavbarLink>
      </Link>

      <LoginButton />
    </LayoutNavbarContainer>
  );
};
