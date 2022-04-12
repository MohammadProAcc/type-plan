import { IBlogPost } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import { checkValidation } from "./../../utils/mod.ts";
import { getBlogPosts } from "./funcs/getBlogPosts.ts";
import { checkBlogPostsDetails, getBlogPostsDetails } from "./getBlogPosts.type.ts";

type GetBlogPostsFn = (
    details: getBlogPostsDetails,
) => Promise<Partial<IBlogPost>[]>;

/**
 * @function
 * get blogPosts with especial filters
 * @param details
 * @param context
 */
export const getBlogPostsFn: GetBlogPostsFn = async details => {
    checkValidation(checkBlogPostsDetails, { details });
    const {
        set: { title, content, blogCategory, blogTags, sort, pagination },
        get,
    } = details;

    /**the default sort is createdAt descending */
    const defaultSort: getBlogPostsDetails["set"]["sort"] = sort
        ? sort
        : { createdAt: -1 };

    let filter: Bson.Document = {};

    title && (filter.title = { $regex: title });
    content && (filter.content = { $regex: content });

    blogTags
        && (filter = {
            ...filter,
            "blogTags.name": { $in: blogTags },
        });
    blogCategory
        && (filter = {
            ...filter,
            "blogCategory.name": { $regex: blogCategory },
        });

    return await getBlogPosts({
        filter,
        getObj: get,
        sort: defaultSort,
        pagination: {
            limit: pagination?.limit,
            page: pagination?.page,
            lastObjectId: pagination?.lastObjectId,
        },
    });
};
