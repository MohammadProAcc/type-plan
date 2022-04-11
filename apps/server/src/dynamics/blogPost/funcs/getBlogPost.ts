import { getComments } from "./../../blogComment/funcs/getComments.ts";
import { makeLookUp, throwError } from "../../../utils/mod.ts";
import { blogPosts, IBlogPost, RBlogPost } from "../../../schemas/mode.ts";
import { makeProjections } from "./../../../utils/mod.ts";
import { Bson } from "../../../utils/deps.ts";
// TODO: make this work!!!!!!!!
function emptyGet(_id: Bson.ObjectID): Partial<IBlogPost> {
  return { _id: _id };
}
type GetBlogPostInput = { _id: Bson.ObjectId; get: RBlogPost };

type GetBlogPost = ({
  _id,
  get,
}: GetBlogPostInput) => Promise<Partial<IBlogPost>>;

export const getBlogPost: GetBlogPost = async ({ _id, get }) => {
  const projection = makeProjections(get, [], []);

  let foundedBlogPost = await blogPosts.findOne(
    { _id: new Bson.ObjectID(_id) },
    { projection },
  );

  const doRelation = async (blogPost: IBlogPost, get: RBlogPost) => {
    /**a function for the time when the get is empty: just return an object with _id  */
    // TODO: it doesnt work
    Object.keys(get).length == 0 ? emptyGet(_id) : null;

    if (get.comments && get.comments!.user) {
      const newBlogPost = (
        await makeLookUp([blogPost], getComments, "comments", get.comments, 1)
      )[0];
      console.group("newBlogPost", "===============");
      console.log(newBlogPost);
      console.groupEnd();
      Object.keys(get).length != 0;
      return newBlogPost;
    }
    return blogPost;
  };
  return foundedBlogPost
    ? await doRelation(foundedBlogPost, get)
    : throwError("can not find BlogPost");
};
