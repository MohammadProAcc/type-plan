import { LoginButton as LoginButtonEl } from "elements";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export const LoginButton: React.FC = () => {
  const [cookies] = useCookies(["token"]);
  const router = useRouter();

  const logout = () => {
    Cookies.remove(process.env.TOKEN);
    alert("خدانگهدار");
    router.reload();
  };

  return (
    <>
      {cookies.token
        ? <LoginButtonEl onClick={logout}>خروج</LoginButtonEl>
        : (
          <Link href="/login">
            <LoginButtonEl>ورود</LoginButtonEl>
          </Link>
        )}
    </>
  );
};
