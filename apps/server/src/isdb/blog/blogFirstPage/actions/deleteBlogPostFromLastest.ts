import { blogPosts } from "../../../../schemas/mode.ts";
import { firstPageSlice } from "./../mod.ts";

export const deleteBlogPostFromLatest = async (_id: string) => {
  const { getState, validate, setState } = firstPageSlice;
  const db = getState();

  var index = db.latestBlogPosts.findIndex(x => x._id == _id);

  console.log("index:", index);
  if (index > -1) {
    const newlatest = await blogPosts
      .find({})
      .sort({ _id: -1 })
      .limit(20)
      .toArray();

    db.latestBlogPosts = newlatest.reverse().map(x => {
      return {
        _id: x._id.toHexString(),
        title: x.title,
        summary: x.summary,
        totalComments: x.totalComments,
        createdAt: x.createdAt,
        blogCategory: {
          _id: x.blogCategory._id.toHexString(),
          name: x.blogCategory.name,
        },
        photo: {
          _id: x.photo._id.toHexString(),
          filename: x.photo.filename,
          type: x.photo.type,
          size: x.photo.size,
        },
        author: {
          _id: x.author._id.toHexString(),
          name: x.author.name,
          profilePicture: x.author.profilePicture
            ? {
              _id: x.author.profilePicture._id.toHexString(),
              filename: x.author.profilePicture.filename,
              type: x.author.profilePicture.type,
              size: x.author.profilePicture.size,
            }
            : undefined,
        },
      };
    });
  }

  await validate(db);
  setState(db);
  return db.latestBlogPosts;
};
