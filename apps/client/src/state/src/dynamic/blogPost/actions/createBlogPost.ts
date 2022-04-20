 
    import { FunQLRequest } from "../../../../declarations/request/schema";
    import { FQl_response_blogPost_IBlogPost } from "../../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleBlogPostInitial,
  store,
} from "../../../../index";
    
          
    export type CreateBlogPostDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["BlogPost"]["doits"]["createBlogPost"]["details"];

type  CreateBlogPost = (
  {}: CreateBlogPostDetails,
  token: string,
) => Promise<Response<FQl_response_blogPost_IBlogPost>>;
    
          
    
export const createBlogPost: CreateBlogPost = async ({ set, get }, token = ""
  
  ) => {
    const str = store;
  
    str &&
      str.setState(({ blogPost }) => {
        blogPost.loader = true;
      });
  
    try {
      const getData = await typePlanApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "BlogPost",
            doit: "createBlogPost",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_blogPost_IBlogPost;
  
      str &&
        str.setState(({ blogPost, blogPosts }) => {
            blogPosts.data.unshift(data);
            blogPost.loader = false;
            blogPost.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ blogPost }) => {
            blogPost.loader = false;
            blogPost.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:singleBlogPostInitial,
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  