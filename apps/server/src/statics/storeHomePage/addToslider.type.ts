import FastestValidator from "https://esm.sh/fastest-validator@1";
const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        strict: true,
        props: {
          photo: "string",
          title: "string",
          subTitle: "string",
          url: "string",
          type: "string",
        },
      },
    },
  },
};
export const checkAddToSlider = v.compile(schema);
/**

 * @interface
 */
export interface addToSliderDetails {
  set: {
    photo: string;
    title: string;
    subTitle: string;
    url: string;
    type: string;
  };
}
