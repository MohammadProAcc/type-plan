import { blogPosts } from "../../../schemas/mode.ts";

import { storeHomePageSlice } from "../mod.ts";

export const deleteBlogPostFromLatestStoreHomePage = async (_id: string) => {
  const { getState, validate, setState } = storeHomePageSlice;
  const db = getState();

  var index = db.storeLatestBlogPosts.findIndex(x => x._id == _id);

  console.log("index:", index);
  if (index > -1) {
    const newlatest = await blogPosts
      .find({})
      .sort({ _id: -1 })
      .limit(3)
      .toArray();

    db.storeLatestBlogPosts = newlatest.reverse().map(x => {
      return {
        _id: x._id.toHexString(),
        title: x.title,
        summary: x.summary,
        createdAt: x.createdAt,
        photo: {
          _id: x.photo._id.toHexString(),
          filename: x.photo.filename,
          type: x.photo.type,
          size: x.photo.size,
        },
      };
    });
  }

  await validate(db);
  setState(db);
  return db.storeLatestBlogPosts;
};
