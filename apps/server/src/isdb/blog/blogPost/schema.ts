import { ObjectID } from "../../../utils/deps.ts";

export const blogPostSchema = {
  blogPost: {
    type: "object",
    props: {
      _id: { type: "objectID", ObjectID },
      title: { type: "string", min: 5, max: 250 },
      summary: { type: "string", min: 5, max: 250 },
      photo: { type: "string", min: 5, max: 250 },
      content: { type: "string", min: 5 },
      author: { type: "string", min: 5, max: 250 },
      blogCategory: { type: "string", min: 5, max: 250 },
      // comments: "object",
      // props: {
      //   user: { type: "string", min: 5, max: 250 },
      //   content: { type: "string", min: 5, max: 250 },
      //   optional: true,
      // },
      blogTags: { type: "array", items: "string", optional: true },
      //       TODO:relatedPost
    },
  },
};

// export const blogPostInit = {
//   post: {},
// };
