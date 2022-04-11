import { LoginButton as LoginButtonEl } from "elements";
import Link from "next/link";

export const LoginButton: React.FC = () => {
  return (
    <Link href="/login">
      <LoginButtonEl>
        ورود
      </LoginButtonEl>
    </Link>
  );
};
