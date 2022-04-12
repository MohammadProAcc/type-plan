import { throwError } from "./mod.ts";

/**
 * a shorthand for doing validation
 * @param validatorFunction an instance of fastest validator that checks whether object is right or not
 * @param object an object that we want to check it
 * @param errorMessage optional error message
 * @example checkValidation(check,{details})
 */
export const checkValidation = <T>(
  validatorFunction: any,
  object: T,
  errorMessage?: string,
) => {
  const detailsIsRight = validatorFunction(object);
  detailsIsRight !== true &&
    throwError(detailsIsRight[0].message + errorMessage);
  return true;
};
