
  import { FQl_response_comment_IComment } from "../../declarations/response/schema";
  import {  Response } from "../../index";
      
     export interface Comment {
        comment: Response<FQl_response_comment_IComment>;
        comments: Response<FQl_response_comment_IComment[]>;
      }
     
     export const singleCommentInitial:FQl_response_comment_IComment ={

      };
      
     export const commentInitials:Comment ={
    comment: {
        error: "",
        data: singleCommentInitial,
        loader: false,
      },
      comments: {
        error: "",
        data: [],
        loader: false,
      }};
      