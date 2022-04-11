import { blogPosts } from "../../../../schemas/mode.ts";
import { firstPageSlice } from "../mod.ts";
import {
  BlogFirstPage,
  LatestBlogPosts,
  PopularBlogPosts,
  PromotionsBlogPosts,
} from "../types.ts";

export const initializeBlogFirstPage = async () => {
  const { validate, setState } = firstPageSlice;
  const numOfPopularPosts = 10;
  const numOfLatestPosts = 20;
  const numOfPromotionPosts = 6;

  const promotes = await blogPosts
    .find(
      {},
      {
        projection: {
          _id: 1,
          title: 1,
          photo: { _id: 1, filename: 1, type: 1, size: 1 },
          summary: 1,
        },
      },
    )
    .limit(numOfPromotionPosts)
    .toArray();

  const newPromots = promotes.map(x => {
    return {
      _id: x._id.toHexString(),
      title: x.title,
      summary: x.summary,
      photo: x.photo
        ? {
          _id: x.photo._id.toHexString(),
          filename: x.photo.filename,
          type: x.photo.type,
          size: x.photo.size,
        }
        : undefined,
    };
  });

  const latest = await blogPosts
    .find(
      {},
      {
        projection: {
          _id: 1,
          createdAt: 1,
          title: 1,
          summary: 1,
          blogCategory: 1,
          author: 1,
          totalComments: 1,
          photo: 1,
        },
      },
    )
    .sort({ _id: 1 })
    .limit(numOfLatestPosts)
    .toArray();
  const latestBlogPosts: LatestBlogPosts[] = latest.map((x: any) => {
    const b = {
      _id: x._id,
      createdAt: x.createdAt,
      title: x.title,
      summary: x.summary,
      blogCategory: {
        _id: x.blogCategory!._id,
        name: x.blogCategory!.name,
      },
      author: {
        _id: x.author!._id!,
        name: x.author!.name!,
        profilePicture: x.author!.profilePicture!,
      },
      totalComments: x.totalComments,
      photo: x.photo!,
    };
    return b;
  });

  const popular = await blogPosts
    .find({}, { projection: { _id: 1, title: 1, photo: 1, totalLikes: 1 } })
    .sort({ totalLikes: 1 })
    .limit(numOfPopularPosts)
    .toArray();

  const newPop = popular.map(x => {
    return {
      _id: x._id.toHexString(),
      title: x.title,
      totalLikes: x.totalLikes,
      photo: {
        _id: x.photo._id.toHexString(),
        filename: x.photo.filename,
        type: x.photo.type,
        size: x.photo.size,
      },
    };
  });

  const db: BlogFirstPage = {
    promotionBlogPosts: newPromots! as PromotionsBlogPosts[],
    latestBlogPosts: latestBlogPosts as LatestBlogPosts[],
    popularBlogPosts: newPop! as PopularBlogPosts[],
  };

  await validate(db);
  await setState(db);
  await firstPageSlice.setup();
  return db;
};
