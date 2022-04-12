import { IState, RState, states } from "../../../schemas/mode.ts";
import { Bson } from "../../../utils/deps.ts";
import { makeProjections } from "../../../utils/mod.ts";
import { throwError } from "../../../utils/mod.ts";

type GetStateInput = { _id: Bson.ObjectID; get: RState };

type GetState = ({ _id, get }: GetStateInput) => Promise<Partial<IState>>;

/**
 * Represent getStateFn
 * @param param0
 * param is include _id , get
 * get for specify what user want
 */
export const getState: GetState = async ({ _id, get }) => {
  const projection = makeProjections(get, [], []);
  let foundedDocument = await states.findOne({ _id }, { projection });
  !foundedDocument && throwError("can not find state");

  return foundedDocument!;
};
