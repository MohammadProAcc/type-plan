
  import { FQl_response_contactUs_IContactUs } from "../../declarations/response/schema";
  import {  Response } from "../../index";
      
     export interface ContactUs {
        contactUs: Response<FQl_response_contactUs_IContactUs>;
        contactUss: Response<FQl_response_contactUs_IContactUs[]>;
      }
     
     export const singleContactUsInitial:FQl_response_contactUs_IContactUs ={

      };
      
     export const contactUsInitials:ContactUs ={
    contactUs: {
        error: "",
        data: singleContactUsInitial,
        loader: false,
      },
      contactUss: {
        error: "",
        data: [],
        loader: false,
      }};
      