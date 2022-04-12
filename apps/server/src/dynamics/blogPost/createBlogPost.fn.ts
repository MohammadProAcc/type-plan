import { PuFile } from "./../../schemas/upload.ts";
import { StoreLatestBlogPosts } from "../../isdb/mod.ts";
import { addToLatest } from "./../../isdb/blog/blogFirstPage/actions/addToLatest.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { checkValidation } from "../../utils/mod.ts";
import { getPureDoc } from "../../utils/mod.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { manEmbedded } from "../../utils/mod.ts";
import {
  blogCategories,
  blogPosts as bp,
  blogTags,
  IBlogPost,
} from "../../schemas/mode.ts";
import { emptyTokenError, notFoundError } from "./../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import {
  checkCreateBlogPost,
  createBlogPostDetails,
} from "./createBlogPost.type.ts";
import { getBlogPost } from "./funcs/getBlogPost.ts";
import { LatestBlogPosts } from "../../isdb/blog/blogFirstPage/types.ts";
import { Bson } from "../../utils/deps.ts";
import { addLatestPostsToStoreFirstPage } from "../../isdb/mod.ts";

type CreateBlogPost = (
  details: createBlogPostDetails,
  context: Context,
) => Promise<Partial<IBlogPost>>;

/**
 * @function
 * Represent create BlogPost(insert userToAuthor new blogPost to DB)
 * @param details
 * @param context
 * @returns the newly created blogPost
 */
export const createBlogPost: CreateBlogPost = async (details, context) => {
  !context ? emptyTokenError() : null;
  /**check user is authenticated */
  const user = await isAuthFn(context.token!);
  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin", "Editor"]) : notFoundError("User");
  /** check whether the details(input) is right or not*/
  checkValidation(checkCreateBlogPost, { details });

  const {
    set: { title, summary, content, photo, blogCategoryID, blogTagIDs },
    get,
  } = details;

  /**get pure blogCategory */
  const postBlogCategory = await getPureDoc({
    _idArray: [blogCategoryID],
    schema: blogCategories,
    puProps: ["name", "enName", "icon", "description"],
  });

  /**get the pure blogTags */
  const pureTags = await getPureDoc({
    _idArray: blogTagIDs!,
    schema: blogTags,
    puProps: ["name"],
  });

  /**
   * add pureUser to blogPost as author
   */
  const author = await getPureDoc({
    IDocument: user!,
    puProps: ["name", "lastName", "email", "gender", "profilePicture"],
  });

  /**the new post insert to DB */
  const createdBlogPost = await bp.insertOne({
    createdAt: new Date(),
    title,
    summary,
    content,
    photo,
    blogCategory: postBlogCategory,
    blogTags: [pureTags],
    author,
    totalComments: 0,
  });

  const ob = new Bson.ObjectID(createdBlogPost);
  const createdBlogPostDoc = await bp.findOne({ _id: ob });

  const purePost = await getPureDoc({
    IDocument: createdBlogPostDoc!,
    puProps: ["title", "summary", "photo"],
  });

  /**handle the tags that are embedding this newly created post */
  await manEmbedded({
    array: blogTagIDs!,
    schema: blogTags,
    embeddedField: "blogPosts",
    document: [purePost!],
    limit: 50,
    headOrTail: "tail",
    sortBy: "title",
    sortOrder: "Descending",
  });

  await manEmbedded({
    array: [blogCategoryID!],
    schema: blogCategories,
    embeddedField: "blogPosts",
    document: [purePost!],
    limit: 50,
    headOrTail: "tail",
    sortBy: "title",
    sortOrder: "Descending",
  });

  /**add the newly created Post to blogFirstPage in ISDB */
  const latestPost: LatestBlogPosts = {
    _id: createdBlogPostDoc!._id.toHexString(),
    title: createdBlogPostDoc!.title,
    createdAt: createdBlogPostDoc!.createdAt,
    summary: createdBlogPostDoc!.summary,
    blogCategory: {
      _id: createdBlogPostDoc!.blogCategory!._id.toHexString(),
      name: createdBlogPostDoc!.blogCategory!.name,
    },
    author: {
      _id: createdBlogPostDoc!.author._id!.toHexString(),
      name: createdBlogPostDoc!.author.name!,
      // profilePicture: createdBlogPostDoc!.author.profilePicture
      //   ? {
      //       _id: createdBlogPostDoc!.author.profilePicture._id.toHexString(),
      //       filename: createdBlogPostDoc!.author.profilePicture.filename,
      //       size: createdBlogPostDoc!.author.profilePicture.size,
      //       type: createdBlogPostDoc!.author.profilePicture.type,
      //     }
      //   : undefined,
    },
    totalComments: createdBlogPostDoc!.totalComments!,
    photo: createdBlogPostDoc!.photo
      ? {
          _id: createdBlogPostDoc!.photo._id.toHexString(),
          filename: createdBlogPostDoc!.photo.filename,
          type: createdBlogPostDoc!.photo.type,
          size: createdBlogPostDoc!.photo.size,
        }
      : undefined,
    // createdAt: createdBlogPostDoc,
  };

  await addToLatest(latestPost);
  // const isdbPost: BlogPost = {
  //   _id: createdBlogPostDoc!._id,
  //   title: createdBlogPostDoc!.title,
  //   summary: createdBlogPostDoc!.summary,
  //   content: createdBlogPostDoc!.content,
  //   blogCategoryName: createdBlogPostDoc!.blogCategory!.name,
  //   writer: createdBlogPostDoc!.author.name!,
  //   photo: createdBlogPostDoc!.photo!,
  //   // createdAt: createdBlogPostDoc,
  // };
  // await addPostToIsdb(isdbPost!); doit by syd

  /**add the  createdBlogPost to storeFirstPage in ISDB */
  const storeLatestPost: StoreLatestBlogPosts = {
    _id: createdBlogPostDoc!._id.toHexString(),
    createdAt: createdBlogPostDoc!.createdAt,
    title: createdBlogPostDoc!.title,
    summary: createdBlogPostDoc!.summary,
    photo: {
      _id: createdBlogPostDoc!.photo!._id.toHexString(),
      filename: createdBlogPostDoc!.photo.filename,
      size: createdBlogPostDoc!.photo.size,
      type: createdBlogPostDoc!.photo.type,
    },
  };
  await addLatestPostsToStoreFirstPage(storeLatestPost);

  return get && Object.keys(get).length != 0
    ? getBlogPost({ _id: ob, get })
    : { _id: createdBlogPostDoc!._id };
};
