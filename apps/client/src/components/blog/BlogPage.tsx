import React from 'react';
import { LastPosts } from './LastPosts';

export const BlogPage: React.FC<BlogPageProps> = (props) => {
  return <LastPosts></LastPosts>;
};

export interface BlogPageProps {}
