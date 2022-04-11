import { blogCategories, IBlogCategory, PuFile } from "../../schemas/mode.ts";
import {   checkValidation, Bson, emptyTokenError, notFoundError } from "../../utils/mod.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { checkCreateBlogCategory, createBlogCategoryDetails } from "./createBlogCategory.type.ts";
import { getBlogCategory } from "./funcs/getBlogCategory.ts";

/**
 * the operation of adding a blogCategory to db is done by this function
 * @param name the string name of blogCategory
 * @param enName the string English name of blogCategory
 * @param icon the url of icon of the blogCategory
 * @param description the description about the blogCategory
 */

const createBlogCategory = async (
    name: string,
    enName: string,
    description: string,
    icon?: PuFile,
) => {
    const createdBlogCategory = await blogCategories.insertOne({
        createdAt: new Date(Date.now()),
        name,
        enName,
        icon,
        description,
    });
    const CreatedBlogCategoryObjID = new Bson.ObjectID(createdBlogCategory);
    const foundBlogCategory = await blogCategories.findOne({
        _id: CreatedBlogCategoryObjID,
    });
    return foundBlogCategory;
};

type CreateBlogCategoryFn = (
    details: createBlogCategoryDetails,
    context: Context,
) => Promise<Partial<IBlogCategory>>;

/**
 * @function
 * Represent createBlogCategoryFN (insert blogCategory to db and handle the get part)
 * @param details
 * @param context
 */
export const createBlogCategoryFn: CreateBlogCategoryFn = async (
    details,
    context,
) => {
    !context ? emptyTokenError() : null;

    /**check user is authenticated */
    const user = await isAuthFn(context.token!);

    /**if user was authenticated,check the user role */
    user ? checkRoleFn(user, ["Admin", "Editor"]) : notFoundError("User");
    /** check whether the details(input) is right or not*/
    checkValidation(checkCreateBlogCategory, { details });

    const {
        set: { name, enName, icon, description },
        get,
    } = details;

    const createdBlogCategory = await createBlogCategory(
        name,
        enName,
        description,
        icon,
    );

    return Object.keys(get).length != 0
        ? getBlogCategory({ _id: createdBlogCategory!._id, get })
        : { _id: createdBlogCategory!._id };
};
