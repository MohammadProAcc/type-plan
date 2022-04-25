 
    import { FunQLRequest } from "../../../declarations/request/schema";
    import { FQl_response_comment_IComment } from "../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singleCommentInitial,
  store,
} from "../../../index";
    
          
    export type CreateCommentDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Comment"]["doits"]["createComment"]["details"];

type  CreateComment = (
  {}: CreateCommentDetails,
  token: string,
) => Promise<Response<FQl_response_comment_IComment>>;
    
          
    
export const createComment: CreateComment = async ({ set, get }, token = ""
  
  ) => {
    const str = store;
  
    str &&
      str.setState(({ comment }) => {
        comment.loader = true;
      });
  
    try {
      const getData = await typePlanApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "Comment",
            doit: "createComment",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_comment_IComment;
  
      str &&
        str.setState(({ comment, comments }) => {
            comments.data.unshift(data);
            comment.loader = false;
            comment.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ comment }) => {
            comment.loader = false;
            comment.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:singleCommentInitial,
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  