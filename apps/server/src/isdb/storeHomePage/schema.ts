import { ObjectID } from "../../utils/mod.ts";

export const storeHomePageSchema = {
  /**the wareTypes that are shown on the firstPage */
  wareTypes: {
    type: "array",
    // TODO: this field should be dynamic because the number of wareTypes is dynamic
    // max: 10,
    items: {
      type: "object",
      props: {
        _id: { type: "string", length: 24 },
        name: "string",
        icon: {
          type: "object",
          props: {
            _id: { type: "string", length: 24 },
            filename: { type: "string" },
            type: { type: "string" },
            size: { type: "number" },
          },
          optional: true,
        },
      },
    },
  },
  /**the wares that are shown on the store firstPage */
  promotionWares: {
    type: "array",
    // max: 4,
    items: {
      type: "object",
      props: {
        _id: { type: "string", length: 24 },
        name: { type: "string" },
        price: "number",
        photos: {
          optional: true,
          type: "array",
          items: "object",
          props: {
            _id: { type: "string", length: 24 },
            filename: { type: "string" },
            type: { type: "string" },
            size: { type: "number" },
          },
        },
      },
    },
  },
  /** the blogPosts that are kept on the store firstPage*/
  storeLatestBlogPosts: {
    type: "array",
    max: 3,
    items: {
      type: "object",
      props: {
        _id: { type: "objectID", ObjectID },
        title: "string",
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
        createdAt: { type: "date", convert: true },
      },
    },
  },

  /**the pictures and info that are gonna show in slider */
  storeSlider: {
    type: "array",
    max: 6,
    items: {
      type: "object",
      props: {
        photo: "string",
        title: "string",
        subTitle: "string",
        url: "string",
        type: { type: "enum", values: ["internal", "external"] },
      },
    },
  },
};

export const storeHomePageInit = {
  wareTypes: [],
  promotionWares: [],
  storeLatestBlogPosts: [],
  storeSlider: [],
};
