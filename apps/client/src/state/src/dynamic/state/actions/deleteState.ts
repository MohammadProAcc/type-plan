 
    import { FunQLRequest } from "../../../../declarations/request/schema";
    import { FQl_response_state_IState } from "../../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleStateInitial,
  store,
} from "../../../../index";
    
          
    export type DeleteStateDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["State"]["doits"]["deleteState"]["details"];

type  DeleteState = (
  {}: DeleteStateDetails,
  token: string,
) => Promise<Response<FQl_response_state_IState>>;
    
          
    
export const deleteState: DeleteState = async ({ set, get }, token = ""
  
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
            doit: "deleteState",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_state_IState;
  
      str &&
        str.setState(({ state, states }) => {
            states.data.filter(val => val._id !== data._id);
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
    
  