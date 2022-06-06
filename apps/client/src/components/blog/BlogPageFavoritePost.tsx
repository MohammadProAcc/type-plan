import React from 'react';
import {
  BlogPageFavoriteEl,
  BlogPageFavoriteImg,
  BlogPagefavoritePostHeader,
} from 'elements';

export const BlogPageFavoritePost: React.FC<BlogPageFavoritePostProps> = (
  props
) => {
  return (
    <BlogPageFavoriteEl>
      <BlogPageFavoriteImg></BlogPageFavoriteImg>
      <BlogPagefavoritePostHeader>
        نسل جدید هدست هواوی
      </BlogPagefavoritePostHeader>
    </BlogPageFavoriteEl>
  );
};

export interface BlogPageFavoritePostProps {}
