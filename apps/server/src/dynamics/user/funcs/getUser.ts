import { IUser, RUser, users } from "../../../schemas/user.ts";
import { Bson } from "../../../utils/deps.ts";
import { throwError } from "./../../../utils/mod.ts";
import { makeProjections } from "../../../utils/mod.ts";

type GetUserInput = { _id: Bson.ObjectID; get: RUser };
type GetUserFn = ({ _id, get }: GetUserInput) => Promise<IUser>;

export const getUser: GetUserFn = async ({ _id, get }) => {
    const projection = makeProjections(get, [], []);
    const foundedUser = await users.findOne({ _id }, { projection });
    const doRelation = async (user: IUser, get: RUser) => {
        // TODO: handle user relations in Ruser
        return user;
    };
    return foundedUser
        ? await doRelation(foundedUser, get)
        : throwError("can not find User");
};

type GetInpWI = { _id: Bson.ObjectID; type: "Pure" | "PuRel" };

type GetUserWhitInterface = ({ _id, type }: GetInpWI) => Promise<IUser>;

export const getUserWhitInterface: GetUserWhitInterface = async ({ _id, type }) => {
    const projection = type === "Pure"
        ? {
            _id: 1,
            createdAt: 1,
            updateAt: 1,
            name: 1,
            lastName: 1,
            phone: 1,
            gender: 1,
            birthDate: 1,
            postalCode: 1,
            level: 1,
            email: 1,
            isActive: 1,
            creditCardNumber: 1,
            profilePicture: 1,
        }
        : {};
    const foundedUser = await users.findOne({ _id }, { projection });
    return foundedUser ? foundedUser : throwError("can not found any user");
};
