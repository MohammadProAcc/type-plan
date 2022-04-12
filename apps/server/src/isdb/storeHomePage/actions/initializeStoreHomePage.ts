import { blogPosts } from "../../../schemas/mode.ts";
import { StoreSlider } from "./../mod.ts";
import {
  StoreHomePage,
  storeHomePageSlice,
  StoreLatestBlogPosts,
  WareTypes,
} from "../mod.ts";

export const initializeStoreHomePage = async () => {
  const { validate, setState } = storeHomePageSlice;
  const numOfPromotionWares = 4;
  const numOfLatestPosts = 3;
  const numOfWareTypes = 10;

  /**get foundWareTypes from Db */
  // const foundWareTypes = await wareTypes
  //   .find({}, { projection: { _id: 1, name: 1, photo: 1, icon: 1 } })
  //   .limit(numOfWareTypes)
  //   .toArray();

  /**get promotionWares from DB */
  // const promotionWares = await wares
  //   .find(
  //     {},
  //     {
  //       projection: {
  //         _id: 1,
  //         name: 1,
  //         photos: 1,
  //         price: 1,
  //       },
  //     },
  //   )
  //   .limit(numOfPromotionWares)
  //   .toArray();
  // there are photos in ware we need  one photo

  // const newWaresWithOnePhoto = promotionWares.map(x => {
  //   const wareWithOnePhoto = {
  //     _id: x._id.toHexString(),
  //     name: x.name,
  //     price: x.price,
  //     photos: [{ ...x.photos[0], _id: x.photos[0]._id.toHexString() }],
  //   };
  //   return wareWithOnePhoto;
  // });

  /**get Latest BLogPosts fromDB*/
  const latest = await blogPosts
    .find(
      {},
      {
        projection: {
          _id: 1,
          title: 1,
          summary: 1,
          photo: 1,
          createdAt: 1,
        },
      },
    )
    .sort({ _id: 1 })
    .limit(numOfLatestPosts)
    .toArray();

  /**get blogPosts from db */
  const latestBlogPosts: StoreLatestBlogPosts[] = latest.map((x: any) => {
    const refinedDoc = {
      _id: x._id,
      title: x.title,
      summary: x.summary,
      photo: x.photo!,
      createdAt: x.createdAt,
    };
    return refinedDoc;
  });

  const slider: StoreSlider[] = [
    {
      photo: "sampleUrl.com",
      title: "A quick example of title",
      subTitle: "A quick example of subtitle",
      url: "someURL",
      type: "internal",
    },
    {
      photo: "sampleUrl.com",
      title: "this is title",
      subTitle: "this is subtitle",
      url: "someURL",
      type: "internal",
    },
    {
      photo: "sampleUrl.com",
      title: "this is title",
      subTitle: "this is subtitle",
      url: "someURL",
      type: "internal",
    },
    {
      photo: "sampleUrl.com",
      title: "this is title",
      subTitle: "this is subtitle",
      url: "someURL",
      type: "internal",
    },
    {
      photo: "sampleUrl.com",
      title: "this is title",
      subTitle: "this is subtitle",
      url: "someURL",
      type: "internal",
    },
    {
      photo: "sampleUrl.com",
      title: "this is title",
      subTitle: "this is subtitle",
      url: "someURL",
      type: "internal",
    },
  ];

  // const dbWareTypes = foundWareTypes.map(x => {
  //   return {
  //     _id: x._id.toHexString(),
  //     name: x.name,
  //     icon: {
  //       _id: x._id.toHexString(),
  //       filename: x.icon.filename,
  //       type: x.icon.type,
  //       size: x.icon.size,
  //     },
  //   };
  // });
  const db: StoreHomePage = {
    storeLatestBlogPosts: latestBlogPosts,
    storeSlider: slider,
  };

  await validate(db);

  await setState(db);
  await storeHomePageSlice.setup();
  return db;
};
