import React from 'react';
import { BlogPageLastPostsContainerEl } from 'elements';
import { BlogPageLastPost } from './BlogPageLastPost';
import { BlogPageLastPostsHeader } from 'elements/H2';

export const BlogPageLastPostsContainer: React.FC<
  BlogPageLastPostsContainerProps
> = (props) => {
  return (
    <BlogPageLastPostsContainerEl>
      <BlogPageLastPostsHeader>آخرین مطالب</BlogPageLastPostsHeader>
      <BlogPageLastPost></BlogPageLastPost>
      <BlogPageLastPost></BlogPageLastPost>
      <BlogPageLastPost></BlogPageLastPost>
    </BlogPageLastPostsContainerEl>
  );
};

export interface BlogPageLastPostsContainerProps {}
