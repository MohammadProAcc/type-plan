 
    import { FunQLRequest } from "../../../../declarations/request/schema";
    import { FQl_response_city_ICity } from "../../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleCityInitial,
  store,
} from "../../../../index";
    
          
    export type UpdateCityDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["City"]["doits"]["updateCity"]["details"];

type  UpdateCity = (
  {}: UpdateCityDetails,
  token: string,
) => Promise<Response<FQl_response_city_ICity>>;
    
          
    
export const updateCity: UpdateCity = async ({ set, get }, token = ""
  
  ) => {
    const str = store;
  
    str &&
      str.setState(({ city }) => {
        city.loader = true;
      });
  
    try {
      const getData = await typePlanApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "City",
            doit: "updateCity",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_city_ICity;
  
      str &&
        str.setState(({ city, cities }) => {
            city.data = data;
            city.loader = false;
            city.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ city }) => {
            city.loader = false;
            city.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:singleCityInitial,
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  