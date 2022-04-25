
  import { FQl_response_blogCategory_IBlogCategory } from "../../declarations/response/schema";
  import {  Response } from "../../index";
      
     export interface BlogCategory {
        blogCategory: Response<FQl_response_blogCategory_IBlogCategory>;
        blogCategories: Response<FQl_response_blogCategory_IBlogCategory[]>;
      }
     
     export const singleBlogCategoryInitial:FQl_response_blogCategory_IBlogCategory ={

      };
      
     export const blogCategoryInitials:BlogCategory ={
    blogCategory: {
        error: "",
        data: singleBlogCategoryInitial,
        loader: false,
      },
      blogCategories: {
        error: "",
        data: [],
        loader: false,
      }};
      