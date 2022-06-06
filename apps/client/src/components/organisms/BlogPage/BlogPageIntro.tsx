import React from 'react';
import {
  BlogPageSection,
  BlogPageArticle,
  BlogPageImages,
  BlogPageSlidesImagesDescription,
  BlogPageSlidesImagesDate,
  BlogPageSlidesImagesTitle,
} from 'elements';
import { calcPassedTime } from 'tools';
import { useStore } from 'state';

export const BlogPageIntro: React.FC = () => {

  const {
    topBlogPosts
  } = useStore(state => ({
    topBlogPosts: state.topBlogPosts
  }))

  return (
    <BlogPageSection>
      {topBlogPosts.map((val) => (
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
