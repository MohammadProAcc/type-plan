import { StoreHomePage, storeHomePageSlice, StoreSlider } from "./../mod.ts";

export const addToSlider = async (slide: StoreSlider) => {
  const { getState, validate, setState } = storeHomePageSlice;
  const db = getState();
  const slideArrLength = db.storeSlider.length;
  let newDb: StoreHomePage;

  if (slideArrLength < 6) {
    newDb = {
      ...db,
      storeSlider: [slide, ...db.storeSlider],
    };
  } else {
    db.storeSlider.pop();
    newDb = {
      ...db,

      storeSlider: [slide, ...db.storeSlider],
    };
  }

  await validate(newDb);
  setState(newDb);
  return newDb;
};
