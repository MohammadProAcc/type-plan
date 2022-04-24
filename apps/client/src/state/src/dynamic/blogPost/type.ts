
  import { FQl_response_blogPost_IBlogPost } from "../../../declarations/response/schema";
  import {  Response } from "../../../index";
      
     export interface BlogPost {
        blogPost: Response<FQl_response_blogPost_IBlogPost>;
        blogPosts: Response<FQl_response_blogPost_IBlogPost[]>;
      }
     
     export const singleBlogPostInitial:FQl_response_blogPost_IBlogPost ={

      };
      
     export const blogPostInitials:BlogPost ={
    blogPost: {
        error: "",
        data: singleBlogPostInitial,
        loader: false,
      },
      blogPosts: {
        error: "",
        data: [],
        loader: false,
      }};
      