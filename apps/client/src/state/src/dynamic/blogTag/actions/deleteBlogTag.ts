 
    import { FunQLRequest } from "../../../../declarations/request/schema";
    import { FQl_response_blogTag_IBlogTag } from "../../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleBlogTagInitial,
  store,
} from "../../../../index";
    
          
    export type DeleteBlogTagDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["BlogTag"]["doits"]["deleteBlogTag"]["details"];

type  DeleteBlogTag = (
  {}: DeleteBlogTagDetails,
  token: string,
) => Promise<Response<FQl_response_blogTag_IBlogTag>>;
    
          
    
export const deleteBlogTag: DeleteBlogTag = async ({ set, get }, token = ""
  
  ) => {
    const str = store;
  
    str &&
      str.setState(({ blogTag }) => {
        blogTag.loader = true;
      });
  
    try {
      const getData = await typePlanApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "BlogTag",
            doit: "deleteBlogTag",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_blogTag_IBlogTag;
  
      str &&
        str.setState(({ blogTag, blogTags }) => {
            blogTags.data.filter(val => val._id !== data._id);
            blogTag.loader = false;
            blogTag.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ blogTag }) => {
            blogTag.loader = false;
            blogTag.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:singleBlogTagInitial,
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  