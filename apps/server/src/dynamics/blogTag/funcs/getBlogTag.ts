import { blogTags, IBlogTag, RBlogTag } from "../../../schemas/blogTag.ts";
import { Bson } from "../../../utils/deps.ts";
import { throwError } from "../../../utils/mod.ts";
import { makeProjections } from "./../../../utils/mod.ts";

type GetBlogTagInput = { _id: Bson.ObjectID; get: RBlogTag };
type GetBlogTag = ({ _id, get }: GetBlogTagInput) => Promise<Partial<IBlogTag>>;
export const getBlogTag: GetBlogTag = async ({ _id, get }) => {
  const projection = makeProjections(get, [], []);
  const foundedBlogTag = await blogTags.findOne({ _id }, { projection });
  const doRelation = async (blogTag: IBlogTag, get: RBlogTag) => {
    if (!get) {
      return { _id: foundedBlogTag!._id };
    }
    return blogTag;
  };

  return foundedBlogTag
    ? await doRelation(foundedBlogTag, get)
    : throwError("can not find blogTag");
};
