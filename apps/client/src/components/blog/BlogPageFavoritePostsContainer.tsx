import { BlogPageFavoritePostsContainerEl } from 'elements';
import { BlogPageFavoritePostsHeader } from 'elements/H2';
import React from 'react';
import { BlogPageFavoritePost } from './BlogPageFavoritePost';

export const BlogPageFavoritePostsContainer: React.FC<
  BlogPageFavoritePostsContainerProps
> = (props) => {
  return (
    <BlogPageFavoritePostsContainerEl>
      <BlogPageFavoritePostsHeader>محبوب ترین</BlogPageFavoritePostsHeader>
      <BlogPageFavoritePost></BlogPageFavoritePost>
      <BlogPageFavoritePost></BlogPageFavoritePost>
      <BlogPageFavoritePost></BlogPageFavoritePost>
      <BlogPageFavoritePost></BlogPageFavoritePost>
    </BlogPageFavoritePostsContainerEl>
  );
};

export interface BlogPageFavoritePostsContainerProps {}
