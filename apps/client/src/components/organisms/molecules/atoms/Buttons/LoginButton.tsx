import {
  LoginButton as LoginButtonEl,
  LoginButtonAnchor,
  NavbarLink,
} from "elements";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { singleUserInitial, store } from "state";

export const LoginButton: React.FC = () => {
  const router = useRouter();

  const [cookies, , removeCookie] = useCookies([process.env.TOKEN]);

  useEffect(() => {
    if (cookies[process.env.TOKEN] === "undefined") {
      removeCookie(process.env.TOKEN);
      if (router.route.includes("admin")) {
        router.push("/");
      }
    }
  }, []);

  const logout = () => {
    toast.error("خدانگهدار");
    removeCookie(process.env.TOKEN);
    store.setState({
      me: {
        data: { ...singleUserInitial, loginStatus: "exit", token: "" },
        error: null,
        loader: false,
      },
    });
    if (router.route.includes("admin")) {
      router.push("/");
    }
  };

  return (
    <>
      {cookies[process.env.TOKEN]
        ? (
          <NavbarLink
            lefSide
            onClick={logout}
          >
            خروج
          </NavbarLink>
        )
        : (
          <Link href="/login" passHref>
            <NavbarLink
              lefSide
              onClick={logout}
            >
              ورود
            </NavbarLink>
          </Link>
        )}
    </>
  );
};
