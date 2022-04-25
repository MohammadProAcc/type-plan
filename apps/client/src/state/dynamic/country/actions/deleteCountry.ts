 
    import { FunQLRequest } from "../../../declarations/request/schema";
    import { FQl_response_country_ICountry } from "../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleCountryInitial,
  store,
} from "../../../index";
    
          
    export type DeleteCountryDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Country"]["doits"]["deleteCountry"]["details"];

type  DeleteCountry = (
  {}: DeleteCountryDetails,
  token: string,
) => Promise<Response<FQl_response_country_ICountry>>;
    
          
    
export const deleteCountry: DeleteCountry = async ({ set, get }, token = ""
  
  ) => {
    const str = store;
  
    str &&
      str.setState(({ country }) => {
        country.loader = true;
      });
  
    try {
      const getData = await typePlanApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "Country",
            doit: "deleteCountry",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_country_ICountry;
  
      str &&
        str.setState(({ country, countries }) => {
            countries.data.filter(val => val._id !== data._id);
            country.loader = false;
            country.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ country }) => {
            country.loader = false;
            country.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:singleCountryInitial,
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  