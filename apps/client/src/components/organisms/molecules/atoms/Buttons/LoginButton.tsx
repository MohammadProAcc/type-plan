import { LoginButton as LoginButtonEl } from "elements";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

export const LoginButton: React.FC = () => {
  const [cookies, , removeCookie] = useCookies([process.env.TOKEN]);
  const router = useRouter();

  const logout = () => {
    toast.error("خدانگهدار");
    removeCookie(process.env.TOKEN);
    router.reload();
  };

  return (
    <>
      {cookies[process.env.TOKEN]
        ? <LoginButtonEl onClick={logout}>خروج</LoginButtonEl>
        : (
          <Link href="/login">
            <LoginButtonEl>ورود</LoginButtonEl>
          </Link>
        )}
    </>
  );
};
