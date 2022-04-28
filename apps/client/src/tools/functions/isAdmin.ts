import Cookies from "js-cookie"
import { FQl_response_user_IUser, FQl_response_user_Level, getMe } from "state"

export const isAdmin = async (token?: string) => {
  const response = await getMe({
    set: {},
    get: {
      level: 1
    }
  }, token ?? Cookies.get(process.env.TOKEN));

  return (response.body as FQl_response_user_IUser)
    .level.includes(FQl_response_user_Level.Admin)
}