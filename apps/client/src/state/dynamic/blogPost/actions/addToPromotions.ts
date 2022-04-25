 
    import { FunQLRequest } from "../../../declarations/request/schema";
    import { FQl_response_blogPost_IBlogPost } from "../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleBlogPostInitial,
  store,
} from "../../../index";
    
          
    export type AddToPromotionsDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["BlogPost"]["doits"]["addToPromotions"]["details"];

type  AddToPromotions = (
  {}: AddToPromotionsDetails,
  token: string,
) => Promise<Response<FQl_response_blogPost_IBlogPost>>;
    
          
    
export const addToPromotions: AddToPromotions = async ({ set, get }, token = ""
  ,reset:false
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
            doit: "addToPromotions",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_blogPost_IBlogPost;
  
      str &&
        str.setState(({ blogPost, blogPosts }) => {
            reset
                ? (blogPosts.data = data)
                : blogPosts.data.push(...data);;
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
        data:[],
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  