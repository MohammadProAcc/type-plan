import {
  BlogPageSuggestPostsContainer,
  BlogPageSuggestPostsEl,
} from 'elements';
import { BlogPageSuggestPostsHeader } from 'elements/H2';
import React from 'react';
import { BlogPageSuggestPost } from './BlogPageSuggestPost';

export const BlogPageSuggestPosts: React.FC<
  BlogPageSuggestPostsContainerProps
> = (props) => {
  return (
    <>
      <BlogPageSuggestPostsEl>
        <BlogPageSuggestPostsHeader>پیشنهاد سردبیر</BlogPageSuggestPostsHeader>
        <BlogPageSuggestPostsContainer>
          <BlogPageSuggestPost></BlogPageSuggestPost>
          <BlogPageSuggestPost></BlogPageSuggestPost>
          <BlogPageSuggestPost></BlogPageSuggestPost>
          <BlogPageSuggestPost></BlogPageSuggestPost>
        </BlogPageSuggestPostsContainer>
      </BlogPageSuggestPostsEl>
    </>
  );
};

export interface BlogPageSuggestPostsContainerProps {}
