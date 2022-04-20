import { createTokenStore } from "../isdb/mod.ts";

const verificationConstant = "login:";

interface RedisKey {
  userId: string;
}

const makeLoginKey = ({ userId }: RedisKey) => {
  return verificationConstant + userId + ":";
};

const tokenStore = await createTokenStore<RedisKey>({
  makeTokenKeyFn: makeLoginKey,
});

/**
 * set a code in redis
 * key is id + device
 * value is generated code for authentication
 * @param redisKey
 * @param token
 */
export const setLoginToken = async (redisKey: RedisKey, token: string) => {
  return await tokenStore.addToken({ userId: redisKey.userId }, token, 100);
};

export const getLoginToken = (redisKey: RedisKey) => {
  return tokenStore.getToken(redisKey)!.value;
};

export const delLoginToken = async (redisKey: RedisKey) => {
  return await tokenStore.removeToken(redisKey);
};
