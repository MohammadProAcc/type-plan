import { getBlogPost } from "./funcs/getBlogPost.ts";
import { getPureDoc } from "./../../utils/mod.ts";
import { blogPosts, IBlogPost } from "../../schemas/mode.ts";
import { Context } from "../utils/context.ts";
import { emptyTokenError } from "../../utils/mod.ts";
import { isAuthFn } from "../../utils/mod.ts";
import {
  checkSwitchBlogPostLike,
  SwitchBlogPostLikeDetails,
} from "./switchBlogPostLike.type.ts";
import { checkValidation } from "../../utils/mod.ts";
import "https://deno.land/x/lodash@4.17.19/dist/lodash.js";
import { Bson } from "../../utils/deps.ts";

type SwitchBlogPostLike = (
  details: SwitchBlogPostLikeDetails,
  context: Context,
) => Promise<Partial<IBlogPost>>;

/**
 * @function
 * like or unlike customizedUser post by user
 * @param details
 * @param context
 */
export const switchBlogPostLike: SwitchBlogPostLike = async (
  details,
  context,
) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /** check whether the details(input) is right or not*/
  checkValidation(checkSwitchBlogPostLike, { details });

  const {
    set: {
      /**the id of the post */
      _id,
    },
    get: {},
  } = details;

  const pureUser = await getPureDoc({
    IDocument: user,
    puProps: ["name", "lastName", "phone"],
  });

  /**wether the user has liked the post or not
   * (if the user exist in likedUsers array then has liked the post) */
  const post = await blogPosts.findOne({
    _id: new Bson.ObjectID(_id),
    likedUsers: pureUser,
  });
  console.group("post", "===============");
  console.log(post);
  console.groupEnd();
  const postFull = await blogPosts.findOne({
    _id: new Bson.ObjectID(_id),
  });

  const purePost = await getPureDoc({
    IDocument: postFull!,
    puProps: ["title", "photo", "totalLikes"],
  });

  /**the initial value of totalLikes is handled here
   */

  const preTotalLikes = post !== undefined ? post.totalLikes : 0;
  const purePostStrId = {
    ...purePost!,
    _id: purePost!._id.toString(),
    // totalLikes: purePost!.totalLikes,
  };
  //if post found means the user likes the post
  //remove user id from array
  //decrement total likes
  //else vice versa
  if (post !== undefined) {
    /**the unlike process */
    await blogPosts.updateOne(
      { _id: new Bson.ObjectID(_id) },
      {
        $pull: { likedUsers: pureUser },
        $set: { totalLikes: preTotalLikes! - 1 },
      },
    );
    /**when is post is disliked, we should check the popular list
     * step1:check if the disliked post is in the popular list
     * and see weather it is the last one
     *
     * step2: if it is the last one:
     * 1.fetch the blog Posts from mongoDB
     * 2.sort the by : totalLikes>disliked post total likes
     * 3.pick the first post , check if it is in the popular list
     * 4.if the post is not in popular list:
     * 5.pop the disliked post
     * 6.push the first fetched post to popular list
     * 5.if the fetched post is in popular list
     * 6.do nothing
     */
    // const popList = getPopular();
    // console.group("popList", "===============");
    // console.log(popList);
    // console.groupEnd();
    /**step1: */

    // const isEqual = _.isEqual(popList[0], purePostStrId);
    // console.group("popList[popList.length - 1]", "===============");
    // console.log(popList[0]);
    // console.groupEnd();
    // console.group("purePostStrId", "===============");
    // console.log(purePostStrId);
    // console.groupEnd();
    // console.group("isEqual", "===============");
    // console.log(isEqual);
    // console.groupEnd();
    // if (isEqual) {
    //   const posts = await blogPosts
    //     .find(
    //       {
    //         totalLikes: { $gt: purePost!.totalLikes },
    //       },
    //       { sort: { totalLikes: 1 } },
    //     )
    //     .limit(5)
    //     .toArray();
    //   console.group("posts", "===============");
    //   console.log(posts);
    //   console.groupEnd();
    //   const pureLastPost = await getPureDoc({
    //     IDocument: posts[0],
    //     puProps: ["title", "photo", "totalLikes"],
    //   });
    //   const popListStrId = {
    //     ...popList[0],
    //     _id: new Bson.ObjectID(popList[0]._id),
    //   };

    //   const isThere = _.isEqual(pureLastPost, popListStrId);
    //   console.group("isThere", "===============");
    //   console.log(
    //     isThere,
    //     "----------pureLastPost",
    //     pureLastPost,
    //     "-------popListSTRID",
    //     popListStrId,
    //   );
    //   console.groupEnd();
    //   /**remove the  */
    //   const success = popList.shift();
    //   console.group("success", "===============");
    //   console.log(success);
    //   console.groupEnd();

    //   const fetchedPost = posts.shift();
    //   const fetchedPurePost = await getPureDoc({
    //     IDocument: fetchedPost,
    //     puProps: ["title", "photo", "totalLikes"],
    //   });
    //   console.group("fetchedPost", "===============");
    //   console.log(fetchedPost);
    //   console.groupEnd();
    //   addToPopular(fetchedPurePost! as PopularBlogPosts);
    //   console.group("getPopular(", "===============");
    //   console.log(getPopular());
    //   console.groupEnd();
    // } else {
    // }
  } else {
    await blogPosts.updateOne(
      { _id: new Bson.ObjectID(_id) },
      {
        // TODO: add only required fields
        $addToSet: { likedUsers: pureUser },
        $set: { totalLikes: preTotalLikes! + 1 },
      },
    );
  }

  return await getBlogPost({ _id: new Bson.ObjectID(_id), get: details.get });
};
