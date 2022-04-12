import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { ICity, cities, states, users } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import { throwError } from "../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import { checkDeleteCity, IDeleteCityDetails } from "./deleteCity.type.ts";
type DeleteCity = (
  details: IDeleteCityDetails,
  context: Context,
) => Promise<Partial<ICity>>;

/**
 * @function
 * Represent deleteCity (delete city from db)
 * @param details
 * @param context
 */
export const deleteCityFn: DeleteCity = async (details, context) => {
  //todo must be add authorization

  const detailsIsRight = checkDeleteCity({ details });
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);
  const {
    set: { _id },
  } = details;

  /**
   * in this function first check this city that we want delete it
   * then delete from list of cities from state
   * then delete city
   * @param id - id of city
   */
  const deleteCity = async (id: string) => {
    //check this city exist in users
    const nUserUsed = await users.count({
      "city._id": new Bson.ObjectID(id),
    });
    nUserUsed > 0
      ? throwError("you can not delete because used in users")
      : null;
    //delete city from list of cities in state
    await states.updateMany(
      {},
      {
        $pull: { cities: { _id: new Bson.ObjectID(id) } },
      },
    );

    //delete city
    await cities.deleteOne({ _id: new Bson.ObjectID(id) });
  };

  //check city exist
  const deletedCity = await cities.findOne({
    _id: new Bson.ObjectID(_id),
  });
  deletedCity === undefined
    ? throwError("Id not valid")
    : await deleteCity(_id);

  return { _id: new Bson.ObjectID(_id) };
};
