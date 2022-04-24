 
    import { FunQLRequest } from "../../../../declarations/request/schema";
    import { FQl_response_state_IState } from "../../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleStateInitial,
  store,
} from "../../../../index";
    
          
    export type UpdateStateDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["State"]["doits"]["updateState"]["details"];

type  UpdateState = (
  {}: UpdateStateDetails,
  token: string,
) => Promise<Response<FQl_response_state_IState>>;
    
          
    
export const updateState: UpdateState = async ({ set, get }, token = ""
  
  ) => {
    const str = store;
  
    str &&
      str.setState(({ state }) => {
        state.loader = true;
      });
  
    try {
      const getData = await typePlanApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "State",
            doit: "updateState",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_state_IState;
  
      str &&
        str.setState(({ state, states }) => {
            state.data = data;
            state.loader = false;
            state.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ state }) => {
            state.loader = false;
            state.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:singleStateInitial,
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  