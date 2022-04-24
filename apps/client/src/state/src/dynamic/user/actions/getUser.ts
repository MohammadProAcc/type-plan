 
    import { FunQLRequest } from "../../../../declarations/request/schema";
    import { FQl_response_user_IUser } from "../../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleUserInitial,
  store,
} from "../../../../index";
    
          
    export type GetUserDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["getUser"]["details"];

type  GetUser = (
  {}: GetUserDetails,
  token: string,
) => Promise<Response<FQl_response_user_IUser>>;
    
          
    
export const getUser: GetUser = async ({ set, get }, token = ""
  
  ) => {
    const str = store;
  
    str &&
      str.setState(({ user }) => {
        user.loader = true;
      });
  
    try {
      const getData = await typePlanApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "User",
            doit: "getUser",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_user_IUser;
  
      str &&
        str.setState(({ user, users }) => {
            user.data = data;
            user.loader = false;
            user.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ user }) => {
            user.loader = false;
            user.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:singleUserInitial,
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  