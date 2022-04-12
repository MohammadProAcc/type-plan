import { throwError } from "./mod.ts";
import { PuUser } from "../schemas/mode.ts";

type CheckRole = (user: PuUser, allowedRoles: string[]) => boolean;
export const checkRoleFn: CheckRole = (user, allowedRoles) => {
  // I want to check whether the any element of user roles mach with array of allowed roles
  const hasRole = user!.level.some((item: string) =>
    allowedRoles.includes(item),
  );

  if (hasRole) {
    return true;
  } else {
    throwError(
      `sorry :(, but your Role is not among these roles: {${allowedRoles}}`,
    );
    return false;
  }
};
