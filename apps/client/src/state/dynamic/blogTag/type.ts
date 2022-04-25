
  import { FQl_response_blogTag_IBlogTag } from "../../declarations/response/schema";
  import {  Response } from "../../index";
      
     export interface BlogTag {
        blogTag: Response<FQl_response_blogTag_IBlogTag>;
        blogTags: Response<FQl_response_blogTag_IBlogTag[]>;
      }
     
     export const singleBlogTagInitial:FQl_response_blogTag_IBlogTag ={

      };
      
     export const blogTagInitials:BlogTag ={
    blogTag: {
        error: "",
        data: singleBlogTagInitial,
        loader: false,
      },
      blogTags: {
        error: "",
        data: [],
        loader: false,
      }};
      