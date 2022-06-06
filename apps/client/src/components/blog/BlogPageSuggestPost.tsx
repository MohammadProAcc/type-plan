import { BlogPageSuggestPostTitle } from 'elements';
import { BlogPageSuggestPostEl } from 'elements/Div/BlogPage/SuggestPost';
import { BlogPageSuggestPostImg } from 'elements/Img/BlogPage/BlogPageSuggestPostImg';
import React from 'react';

export const BlogPageSuggestPost: React.FC<BlogPageSuggestPostProps> = (
  props
) => {
  return (
    <BlogPageSuggestPostEl>
      <BlogPageSuggestPostImg />
      <BlogPageSuggestPostTitle>
        افزایش فروش گوشی های سونی نسبت به سال گذشته
      </BlogPageSuggestPostTitle>
    </BlogPageSuggestPostEl>
  );
};

export interface BlogPageSuggestPostProps {}
