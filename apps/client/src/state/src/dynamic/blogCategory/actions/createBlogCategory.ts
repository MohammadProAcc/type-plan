 
    import { FunQLRequest } from "../../../../declarations/request/schema";
    import { FQl_response_blogCategory_IBlogCategory } from "../../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleBlogCategoryInitial,
  store,
} from "../../../../index";
    
          
    export type CreateBlogCategoryDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["BlogCategory"]["doits"]["createBlogCategory"]["details"];

type  CreateBlogCategory = (
  {}: CreateBlogCategoryDetails,
  token: string,
) => Promise<Response<FQl_response_blogCategory_IBlogCategory>>;
    
          
    
export const createBlogCategory: CreateBlogCategory = async ({ set, get }, token = ""
  
  ) => {
    const str = store;
  
    str &&
      str.setState(({ blogCategory }) => {
        blogCategory.loader = true;
      });
  
    try {
      const getData = await typePlanApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "BlogCategory",
            doit: "createBlogCategory",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_blogCategory_IBlogCategory;
  
      str &&
        str.setState(({ blogCategory, blogCategories }) => {
            blogCategories.data.unshift(data);
            blogCategory.loader = false;
            blogCategory.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ blogCategory }) => {
            blogCategory.loader = false;
            blogCategory.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:singleBlogCategoryInitial,
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  