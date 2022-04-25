 
    import { FunQLRequest } from "../../../declarations/request/schema";
    import { FQl_response_city_ICity } from "../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleCityInitial,
  store,
} from "../../../index";
    
          
    export type GetCitiesDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["City"]["doits"]["getCities"]["details"];

type  GetCities = (
  {}: GetCitiesDetails,
  token: string,
) => Promise<Response<FQl_response_city_ICity>>;
    
          
    
export const getCities: GetCities = async ({ set, get }, token = ""
  ,reset:false
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
            doit: "getCities",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_city_ICity;
  
      str &&
        str.setState(({ city, cities }) => {
            reset
                ? (cities.data = data)
                : cities.data.push(...data);;
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
        data:[],
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  