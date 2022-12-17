import {
  BlogPageArticle,
  BlogPageImages,
  BlogPageSection,
  BlogPageSlidesImagesDate,
  BlogPageSlidesImagesDescription,
  BlogPageSlidesImagesTitle,
} from "elements";
import React from "react";
import { useStore } from "state";
import { calcPassedTime } from "tools";

export const BlogPageIntro: React.FC = () => {
  /* const { */
  /*   topBlogPosts */
  /* } = useStore(state => ({ */
  /*   topBlogPosts: state.topBlogPosts */
  /* })) */

  return (
    <BlogPageSection>
      {/* {topBlogPosts.map((val) => ( */}
      {/*   <BlogPageArticle key={val._id}> */}
      {/*     <BlogPageImages src={val.photo.filename} /> */}
      {/*     <BlogPageSlidesImagesDescription> */}
      {/*       <BlogPageSlidesImagesTitle>{val.title}</BlogPageSlidesImagesTitle> */}
      {/*       <BlogPageSlidesImagesDate>{calcPassedTime(val.createdAt)}</BlogPageSlidesImagesDate> */}
      {/*     </BlogPageSlidesImagesDescription> */}
      {/*   </BlogPageArticle> */}
      {/* ))} */}
    </BlogPageSection>
  );
};
