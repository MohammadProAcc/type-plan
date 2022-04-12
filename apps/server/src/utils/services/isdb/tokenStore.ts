import { createISDB } from "../../deps.ts";
import { throwError } from "../../mod.ts";
import { calculatePeriodTime, millesToSeconds } from "./utils.ts";

interface Token {
  key: string;
  value: string;
  exp: number;
}

/**
 * @function
 * checks is token expired or not
 * @param token
 */
const isTokenExpired = (token: Token) =>
  token.exp <= millesToSeconds(Date.now());

/**
 * @function
 * create a in memory store for keeping tokens with ttl
 * @param makeTokenKeyFn a function for transform key structure to string
 * @param checkPeriodTime period for checking and deleting tokens from store
 * @template KEY structure of keys of tokens
 */
export const createTokenStore = <KEY>(options: {
  makeTokenKeyFn: (key: KEY) => string;
  minCheckPeriodTime?: number;
  factorOfIncreasePeriodTime?: number;
  maxCheckPeriodTime?: number;
}) => {
  //extract options from args
  const {
    makeTokenKeyFn,
    minCheckPeriodTime = 0,
    factorOfIncreasePeriodTime = 1,
    maxCheckPeriodTime = minCheckPeriodTime,
  } = options;

  let periodTime = minCheckPeriodTime;

  //create state management store
  const { setup, getState, setState } = createISDB<Token[]>([], {
    $$root: true,
    type: "array",
    items: {
      type: "object",
      props: {
        key: { type: "string" },
        value: { type: "string" },
        exp: { type: "number" },
      },
    },
  });

  /**
   * @function
   * delete all expired tokens from store
   * @remarks if some tokens was expired, we should set new state
   */
  const delExpiredTokens = () => {
    const preState = getState();
    //find all of tokens that is not expired
    const newState = preState.filter((token: any) => !isTokenExpired(token));
    //if some tokens was expired, we should set new state
    preState.length !== newState.length && setState(newState);
  };

  /**
   * @function
   * @async
   * an INFE for handling TTL
   * in each interval we should delete expired token
   * @note if token object is empty we increase interval time till interval time raise to max check period time
   * @note if object has a token we set interval time to min again
   */
  minCheckPeriodTime &&
    (function handleExpirationOfToken() {
      let interval: number;

      interval = setInterval(
        () => {
          const state = getState();
          delExpiredTokens();

          //calculate new interval time for performance reasons
          if (state.length === 0) {
            clearInterval(interval);
            periodTime = calculatePeriodTime(
              periodTime,
              factorOfIncreasePeriodTime,
              maxCheckPeriodTime,
            );
            interval = setInterval(delExpiredTokens, periodTime * 1000);
          } else if (periodTime !== minCheckPeriodTime) {
            clearInterval(interval);
            periodTime = minCheckPeriodTime;
            interval = setInterval(delExpiredTokens, periodTime * 1000);
          }
        },
        periodTime * 1000, //convert seconds to milliseconds
      );
    })();

  /**
   * @function
   * @async
   * add a token to in-memory store
   * @param key the key that we want to store token according to it
   * @param value the value of token
   * @param exp time to live of token in second
   * @note if we have a token with given key, new token will be overwritten
   * @remarks it also removes expired tokens
   */
  const addToken = async (key: KEY, value: string, exp: number) => {
    //get previous state

    const preState = getState();

    //first we should delete expired token and avoids from duplicated token
    const newState = preState
      .filter(
        (token: any) =>
          !isTokenExpired(token) && token.key !== makeTokenKeyFn(key),
      )
      .concat({
        key: makeTokenKeyFn(key),
        value,
        exp: millesToSeconds(Date.now()) + exp,
      });

    //add new token
    await setState(newState);
  };

  /**
   * @function
   * remove a token from token store
   * @remarks it removes two types of tokens: specified tokens and expired tokens
   * @param key key of token
   */
  const removeToken = async (key: KEY) => {
    const preState = getState();
    //delete specified tokenType
    const newState = preState.filter(
      (token: any) =>
        makeTokenKeyFn(key) !== token.key && !isTokenExpired(token),
    );
    //if some change was occurred we should set new state
    preState.length !== newState.length && (await setState([...newState]));
  };

  /**
   * @function
   * get stored token from store
   * @remarks we should c
   * @param key key of token
   */
  const getToken = (key: KEY) => {
    const preState = getState();

    //find all tokens that was not expired
    const notExpiredState = preState.filter(
      (token: any) => !isTokenExpired(token),
    );
    //find specified token
    const token = notExpiredState.find(
      (token: any) => token.key === makeTokenKeyFn(key),
    );

    //checks token exists or not
    !token && throwError("token was not found or expired");

    //if some of token was expired we should remove it and set new state
    notExpiredState.length !== preState.length && setState(notExpiredState);

    //return founded token or undefined
    return token;
  };

  const getTokens = () => {
    getState();
  };

  return {
    addToken,
    removeToken,
    getToken,
    getTokens,
  };
};
