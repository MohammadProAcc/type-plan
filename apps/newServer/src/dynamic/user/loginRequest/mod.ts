import { ActFn, enums, object, optional } from "../../../../deps.ts";
import { tarhApp } from "../../../../mod.ts";
import { pureUser, users } from "../../../../schema/user.ts";

export const loginRequestValidator = () => {
  return object({
    set: object(pureUser),
    get: object({
      ok: optional(enums([0, 1])),
      phone: optional(enums([0, 1])),
    }),
  });
};

export const createVerificationCode = (): string => {
  return Deno.env.get("ENVIROMENT") === "production"
    ? // ? Math.floor(Math.random() * (999999 - 100000) + 100000).toString()
      "111111"
    : "111111";
};

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

export const loginRequest: ActFn = async (body) => {
  const createdUser = await users.insertOne(body.details.set);
  const code = createVerificationCode();
  await setLoginToken({ userId: foundedUser!._id.toHexString() }, code);
  const returnObj: LoginRequestReturn = {};
  return await users.findOne({ _id: createdUser }, body.details.get);
};
