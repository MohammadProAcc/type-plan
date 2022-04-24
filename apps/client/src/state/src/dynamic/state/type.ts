
  import { FQl_response_state_IState } from "../../../declarations/response/schema";
  import {  Response } from "../../../index";
      
     export interface State {
        state: Response<FQl_response_state_IState>;
        states: Response<FQl_response_state_IState[]>;
      }
     
     export const singleStateInitial:FQl_response_state_IState ={

      };
      
     export const stateInitials:State ={
    state: {
        error: "",
        data: singleStateInitial,
        loader: false,
      },
      states: {
        error: "",
        data: [],
        loader: false,
      }};
      