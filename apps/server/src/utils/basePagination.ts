// export type PaginationOrder = -1 | 1;
/**
 * @interface
 * @abstract
 * use as pagination input in get functions or in makePagination function
 */
 export type SortType<T> = { [key in keyof T]?: 1 | -1 };




 

 export interface PaginationInput<T> {
   pagination?: PaginationType;
   sort?: SortType<T>;
 }
 
 export type PaginationType = {
   lastObjectId?: string;
   limit?: number;
   page?: number;
 };
 export interface BasePaginationDetail<T> {
   sort?: SortType<T>;
   pagination?: PaginationType;
 }
 
 /**
  * validation object of pagination for fastest validator
  * @function
  * @param sortBy list of fields that we want to do sort regards to this list
  * @example use it by spread operator ex: props:{....validationObject}
  * @returns validation object
  */
 export const basePaginationValidationObject = <T>(...sortBy: (keyof T)[]) => {
   const sortFields = sortBy
     .map(sortField => {
       return {
         [sortField]: {
           optional: true,
           type: "enum",
           values: [1, -1],
         },
       };
     })
     .reduce((pre, cur) => ({ ...pre, ...cur }), {});
 
   return {
     pagination: {
       optional: true,
       type: "object",
       props: {
         /**
          * last Object id fetched with it.
          */
         lastObjectId: { type: "string", min: 24, max: 24, optional: true },
         /**
          * limitation of each page
          */
         limit: { type: "number", min: 10, max: 50, optional: true },
         /**
          * page of fetched document
          */
         page: { type: "number", min: 1, optional: true },
         /**
          * sort object
          */
       },
     },
     sort: {
       optional: true,
       type: "object",
       strict: true,
       props: {
         ...sortFields,
       },
     },
   };
 };
 
