import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { countries } from "../../schemas/country.ts";
import { IState, states } from "../../schemas/state.ts";
import { users } from "../../schemas/user.ts";
import { Bson } from "../../utils/deps.ts";
import { throwError } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { checkDeleteIState, IDeleteIStateDetails } from "./deleteState.type.ts";

type DeleteState = (
  details: IDeleteIStateDetails,
  context: Context,
) => Promise<Partial<IState>>;

/**
 * @function
 * Represent deleteIState (delete state from db)
 * @param details
 * @param context
 */
export const deleteStateFn: DeleteState = async (details, context) => {
  //todo must be add authorization

  const detailsIsRight = checkDeleteIState({ details });
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);
  const {
    set: { _id },
  } = details;

  /**
   * in this function first check this state that we want delete it
   * then delete from list of states from country
   * then delete state
   * @param id - id of state
   */
  const deleteIState = async (id: string) => {
    //check this state exist in users
    const nUserUsed = await users.count({
      "state._id": new Bson.ObjectID(id),
    });
    nUserUsed > 0
      ? throwError("you can not delete because used in users")
      : null;

    //delete city from list of cities in state
    await countries.updateMany(
      {},
      {
        $pull: { states: { _id: new Bson.ObjectID(id) } },
      },
    );

    //delete state
    await states.deleteOne({ _id: new Bson.ObjectID(id) });
  };

  //check city exist
  const deletedIState = await states.findOne({
    _id: new Bson.ObjectID(_id),
  });
  deletedIState === undefined
    ? throwError("Id not valid")
    : await deleteIState(_id);

  return { _id: new Bson.ObjectID(_id) };
};
