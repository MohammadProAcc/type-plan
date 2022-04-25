 
    import { FunQLRequest } from "../../../declarations/request/schema";
    import { FQl_response_country_ICountry } from "../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleCountryInitial,
  store,
} from "../../../index";
    
          
    export type GetCountriesDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Country"]["doits"]["getCountries"]["details"];

type  GetCountries = (
  {}: GetCountriesDetails,
  token: string,
) => Promise<Response<FQl_response_country_ICountry>>;
    
          
    
export const getCountries: GetCountries = async ({ set, get }, token = ""
  ,reset:false
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
            doit: "getCountries",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_country_ICountry;
  
      str &&
        str.setState(({ country, countries }) => {
            reset
                ? (countries.data = data)
                : countries.data.push(...data);;
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
        data:[],
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  