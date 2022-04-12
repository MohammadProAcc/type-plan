export const throwError = (msg?: string) => {
  throw new Error(msg);
};
/**an error is for the time when the token is empty */
export const emptyTokenError = () => {
  throw new Error("Your Token is empty");
};

/**an error is for the time when the token is empty */
export const notFoundError = (msg: string) => {
  throw new Error(`${msg} Not Found`);
};
