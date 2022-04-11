import { updateLatestFromStorePage } from '../../isdb/mod.ts';
import { updatePopular } from "./../../isdb/blog/blogFirstPage/actions/updatePopular.ts";
import {
  PromotionsBlogPosts,
  PopularBlogPosts,
  LatestBlogPosts,
} from "./../../isdb/blog/blogFirstPage/types.ts";
import { updatePromotion } from "./../../isdb/blog/blogFirstPage/actions/updatePromotion.ts";
import { updateLatest } from "../../isdb/blog/blogFirstPage/actions/updateLatest.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { emptyTokenError, notFoundError } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import {
  blogCategories,
  blogPosts,
  blogTags,
  IBlogPost,
} from "../../schemas/mode.ts";
import { getBlogPost } from "./funcs/getBlogPost.ts";
import {
  checkUpdateBlogPost,
  UpdateBlogPostDetails,
} from "./updateBlogPost.type.ts";
import { getDocumentsFromDocumentRefs } from "./utills/getDocumentsFromDocumentsRef.ts";
import { StoreLatestBlogPosts } from "../../isdb/mod.ts";

type UpdateBlogPost = (
  details: UpdateBlogPostDetails,
  context: Context,
) => Promise<Partial<IBlogPost>>;

/**
 * Represent updateCategory (update category on db)
 * @function
 * @param details
 * @param context
 */
export const updateBlogPost: UpdateBlogPost = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin", "Editor"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkUpdateBlogPost, { details });

  const {
    set: { _id, title, summary, content, photo, blogCategoryID, blogTagIDs },
    get,
  } = details;

  //get blogCategory Documents from blogCategoryID
  const newBlogCategory = blogCategoryID
    ? await blogCategories.findOne({
        _id: new Bson.ObjectID(blogCategoryID),
      })
    : null;

  //get blogTag Documents from blogTagIDs array
  const newBlogTags = blogTagIDs
    ? await getDocumentsFromDocumentRefs(blogTagIDs, blogTags)
    : null;

  await blogPosts.updateOne(
    { _id: new Bson.ObjectID(_id) },
    {
      $set: {
        title,
        summary,
        content,
        photo,
        blogCategory: newBlogCategory,
        blogTags: newBlogTags,
      },
    },
  );
  const foundNewBlogPost = await blogPosts.findOne({
    _id: new Bson.ObjectID(_id),
  });

  //update all of isdb field
  //step1: update promotion
  const promotionPost = {
    _id: foundNewBlogPost!._id.toHexString(),
    title: foundNewBlogPost!.title,
    summary: foundNewBlogPost!.summary,
    photo: foundNewBlogPost
      ? {
          _id: foundNewBlogPost!.photo._id.toHexString(),
          filename: foundNewBlogPost.photo.filename,
          size: foundNewBlogPost.photo.size,
          type: foundNewBlogPost.photo.type,
        }
      : undefined,
  } as PromotionsBlogPosts;
  await updatePromotion(promotionPost);

  //step2: update popular
  const popularPost = {
    _id: foundNewBlogPost!._id.toHexString(),
    totalLikes: foundNewBlogPost?.totalLikes,
    title: foundNewBlogPost!.title,
    photo: foundNewBlogPost
      ? {
          _id: foundNewBlogPost!.photo._id.toHexString(),
          filename: foundNewBlogPost.photo.filename,
          size: foundNewBlogPost.photo.size,
          type: foundNewBlogPost.photo.type,
        }
      : undefined,
  } as PopularBlogPosts;
  await updatePopular(popularPost);

  //step3: update latest in store home page
  const latestPost: LatestBlogPosts = {
    _id: foundNewBlogPost!._id.toHexString(),
    title: foundNewBlogPost!.title,
    createdAt: foundNewBlogPost!.createdAt,
    summary: foundNewBlogPost!.summary,
    blogCategory: {
      _id: foundNewBlogPost!.blogCategory!._id.toHexString(),
      name: foundNewBlogPost!.blogCategory!.name,
    },
    author: {
      _id: foundNewBlogPost!.author._id!.toHexString(),
      name: foundNewBlogPost!.author.name!,
      profilePicture: foundNewBlogPost!.author.profilePicture
        ? {
            _id: foundNewBlogPost!.author.profilePicture._id.toHexString(),
            filename: foundNewBlogPost!.author.profilePicture.filename,
            size: foundNewBlogPost!.author.profilePicture.size,
            type: foundNewBlogPost!.author.profilePicture.type,
          }
        : undefined,
    },
    totalComments: foundNewBlogPost!.totalComments!,
    photo: foundNewBlogPost!.photo
      ? {
          _id: foundNewBlogPost!.photo._id.toHexString(),
          filename: foundNewBlogPost!.photo.filename,
          type: foundNewBlogPost!.photo.type,
          size: foundNewBlogPost!.photo.size,
        }
      : undefined,
    // createdAt: createdBlogPostDoc,
  };
  await updateLatest(latestPost);

  //setp4: update latest in blog first page
  const storeLatestPost: StoreLatestBlogPosts = {
    _id: foundNewBlogPost!._id.toHexString(),
    createdAt: foundNewBlogPost!.createdAt,
    title: foundNewBlogPost!.title,
    summary: foundNewBlogPost!.summary,
    photo: {
      _id: foundNewBlogPost!.photo!._id.toHexString(),
      filename: foundNewBlogPost!.photo.filename,
      size: foundNewBlogPost!.photo.size,
      type: foundNewBlogPost!.photo.type,
    },
  };

  await updateLatestFromStorePage(storeLatestPost)



  return Object.keys(get).length != 0
    ? getBlogPost({ _id: foundNewBlogPost!._id, get })
    : { _id: foundNewBlogPost!._id };
};
