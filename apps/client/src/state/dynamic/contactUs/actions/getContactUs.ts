 
    import { FunQLRequest } from "../../../declarations/request/schema";
    import { FQl_response_contactUs_IContactUs } from "../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleContactUsInitial,
  store,
} from "../../../index";
    
          
    export type GetContactUsDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["ContactUs"]["doits"]["getContactUs"]["details"];

type  GetContactUs = (
  {}: GetContactUsDetails,
  token: string,
) => Promise<Response<FQl_response_contactUs_IContactUs>>;
    
          
    
export const getContactUs: GetContactUs = async ({ set, get }, token = ""
  
  ) => {
    const str = store;
  
    str &&
      str.setState(({ contactUs }) => {
        contactUs.loader = true;
      });
  
    try {
      const getData = await typePlanApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "ContactUs",
            doit: "getContactUs",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_contactUs_IContactUs;
  
      str &&
        str.setState(({ contactUs, contactUss }) => {
            contactUs.data = data;
            contactUs.loader = false;
            contactUs.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ contactUs }) => {
            contactUs.loader = false;
            contactUs.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:singleContactUsInitial,
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  