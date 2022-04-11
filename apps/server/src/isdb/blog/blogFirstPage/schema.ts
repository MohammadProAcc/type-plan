import { ObjectID } from "../../../utils/deps.ts";

export const firstPageSchema = {
  promotionBlogPosts: {
    type: "array",
    max: 6,
    items: {
      type: "object",
      props: {
        _id: { type: "objectID", ObjectID },
        title: { type: "string", min: 5, max: 250 },
        summary: "string",
        photo: {
          type: "object",
          props: {
            _id: { type: "objectID", ObjectID },
            filename: { type: "string" },
            type: { type: "string" },
            size: { type: "number" },
          },
          optional: true,
        },
      },
    },
  },
  latestBlogPosts: {
    type: "array",
    max: 20,
    items: {
      type: "object",
      props: {
        _id: { type: "objectID", ObjectID },
        title: "string",
        summary: "string",
        /**the blogCategory of the post, only props that are needed in the ui
         *the types are exactly equal to blogCategory  schema
         */
        blogCategory: {
          type: "object",
          props: {
            _id: { type: "objectID", ObjectID },
            name: { type: "string" },
          },
        },
        /**the user of the post(just the props of the user that are needed in BLogFirstPage UI)
         * the types are exactly equal to user schema
         */
        author: {
          type: "object",
          props: {
            _id: { type: "objectID", ObjectID },
            name: { type: "string" },
            profilePicture: {
              type: "object",
              props: {
                _id: { type: "objectID", ObjectID },
                filename: { type: "string" },
                type: { type: "string" },
                size: { type: "number" },
              },
              optional: true,
            },
          },
        },
        totalComments: "number",
        photo: {
          type: "object",
          props: {
            _id: { type: "objectID", ObjectID },
            filename: { type: "string" },
            type: { type: "string" },
            size: { type: "number" },
          },
          optional: true,
        },
        createdAt: { type: "date", convert: true },
      },
    },
  },
  popularBlogPosts: {
    type: "array",
    max: 10,
    items: {
      type: "object",
      props: {
        _id: { type: "objectID", ObjectID },
        title: "string",
        photo: {
          type: "object",
          props: {
            _id: { type: "objectID", ObjectID },
            filename: { type: "string" },
            type: { type: "string" },
            size: { type: "number" },
          },
          optional: true,
        },
        totalLikes: "number",
      },
    },
  },
};

export const firstPageInit = {
  promotionBlogPosts: [],
  latestBlogPosts: [],
  popularBlogPosts: [],
};
