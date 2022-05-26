import React from 'react';
import {
  BlogPageSection,
  BlogPageArticle,
  BlogPageImages,
  BlogPageSlidesImagesDescription,
  BlogPageSlidesImagesDate,
  BlogPageSlidesImagesTitle,
} from 'elements';
import { BLOG_SLIDES_ARTICLE } from 'constants/index';
import { calcPassedTime } from 'tools';

export const BlogPageIntro: React.FC = () => {
  return (
    <BlogPageSection>
      {BLOG_SLIDES_ARTICLE.map((val) => (
        <BlogPageArticle key={val._id}>
          <BlogPageImages src={val.photo.filename} />
          <BlogPageSlidesImagesDescription>
            <BlogPageSlidesImagesTitle>{val.title}</BlogPageSlidesImagesTitle>
            <BlogPageSlidesImagesDate>{calcPassedTime(val.createdAt)}</BlogPageSlidesImagesDate>
          </BlogPageSlidesImagesDescription>
        </BlogPageArticle>
      ))}
    </BlogPageSection>
  );
};
