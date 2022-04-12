import { addToPopular } from "../../isdb/blog/blogFirstPage/actions/mod.ts";
import { PopularBlogPosts } from "../../isdb/blog/blogFirstPage/mod.ts";
import { blogPosts } from "../../schemas/mode.ts";
export const popularPostsFn = async () => {
  let popularPosts = [];
  const maxNumOfPopularPosts = 10;
  const posts = await (
    await blogPosts
      .find({}, { projection: { title: 1, photo: 1, totalLikes: 1 } })
      .sort({ totalLikes: -1 })
      .toArray()
  ).slice(0, maxNumOfPopularPosts - 1);

  popularPosts = await posts.map(x => {
    addToPopular({
      _id: x._id.toHexString(),
      title: x.title,
      totalLikes: x.totalLikes,
      photo: {
        _id: x.photo._id.toHexString(),
        filename: x.photo.filename,
        type: x.photo.type,
        size: x.photo.size,
      },
    } as PopularBlogPosts);
  });

  return popularPosts;
};
