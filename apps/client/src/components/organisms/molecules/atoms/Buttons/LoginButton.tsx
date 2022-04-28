import { LoginButton as LoginButtonEl, LoginButtonAnchor } from "elements";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

export const LoginButton: React.FC = () => {
  const router = useRouter();

  const [cookies, , removeCookie] = useCookies([process.env.TOKEN]);

  const logout = () => {
    toast.error("خدانگهدار");
    removeCookie(process.env.TOKEN);
    if (router.route.includes("admin")) {
      router.push("/");
    }
  };

  return (
    <>
      {cookies[process.env.TOKEN]
        ? (
          <LoginButtonAnchor>
            <LoginButtonEl onClick={logout}>خروج</LoginButtonEl>
          </LoginButtonAnchor>
        )
        : (
          <Link href="/login" passHref>
            <LoginButtonAnchor>
              <LoginButtonEl>ورود</LoginButtonEl>
            </LoginButtonAnchor>
          </Link>
        )}
    </>
  );
};
