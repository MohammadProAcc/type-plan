import { LoginButton as LoginButtonEl, LoginButtonAnchor } from "elements";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

export const LoginButton: React.FC = () => {
  const [cookies, , removeCookie] = useCookies([process.env.TOKEN]);

  const logout = () => {
    toast.error("خدانگهدار");
    removeCookie(process.env.TOKEN);
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
