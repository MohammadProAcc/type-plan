
  import { FQl_response_user_IUser } from "../../../declarations/response/schema";
  import {  Response } from "../../../index";
      
     export interface User {
        user: Response<FQl_response_user_IUser>;
        users: Response<FQl_response_user_IUser[]>;
      }
     
     export const singleUserInitial:FQl_response_user_IUser ={

      };
      
     export const userInitials:User ={
    user: {
        error: "",
        data: singleUserInitial,
        loader: false,
      },
      users: {
        error: "",
        data: [],
        loader: false,
      }};
      