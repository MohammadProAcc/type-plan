import React from 'react';
import { BlogPageLastPost } from 'elements';
import { P } from 'elements/P';

export const LastPosts: React.FC<LastPostsProps> = (props) => {
  return (
    <>
      <BlogPageLastPost>
        <P>salam reza</P>
      </BlogPageLastPost>
    </>
  );
};

export interface LastPostsProps {}
