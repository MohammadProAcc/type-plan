import { LoginButton, NavbarLogo } from "components";
import { Div, LayoutNavbarContainer, NavbarLink } from "elements";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FQl_response_user_Level, getMe, InitialState, useStore } from "state";
import styled from "styled-components";
import { Device } from "styles";

export const LayoutNavbar: React.FC = () => {
  const router = useRouter();

  const [cookies] = useCookies([process.env.TOKEN]);

  const [isOpenMenu, menuToggle] = useState(false);

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
      <ReponsiveHumberger>
        <NavbarLink
          active={isOpenMenu}
          onClick={() => menuToggle(!isOpenMenu)}
          fixed
        >
          {isOpenMenu ? "✖ " : "☰ "}
        </NavbarLink>
      </ReponsiveHumberger>
      <ResponseMenu isOpenMenu={isOpenMenu}>
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
            deactive={!me.data.level.includes(FQl_response_user_Level.Admin)}
            active={router?.route?.includes("admin")}
          >
            بخش مدیریت
          </NavbarLink>
        </Link>

        <LoginButton />
      </ResponseMenu>
    </LayoutNavbarContainer>
  );
};

export interface MenuActivation {
  isOpenMenu: boolean;
}

export const ResponseMenu = styled(Div)<MenuActivation>`
display: ${props => props.isOpenMenu ? "flex" : "none"};
flex-direction: column;
width: 100%;
  @media (${Device.laptop}) {
  display: flex;
  flex-direction: row;
    
  }
`;

export const ReponsiveHumberger = styled(Div)`
display: flex;
position: absolute;
top: 0;
left: 0.5rem;
  @media (${Device.laptop}) {
  display: none;
    
  }
`;
