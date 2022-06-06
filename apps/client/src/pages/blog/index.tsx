import React from 'react';
import { BlogPage } from 'components';
import { GetStaticProps } from 'next';
import { typePlanApi } from 'state';

export const Blog: React.FC = () => <BlogPage />;

export default Blog;

export const getStaticProps: GetStaticProps = async () => {

  const blogPosts = await typePlanApi.api({
    contents: "dynamic",
    wants: {
      model: "BlogPost",
      doit: "getBlogPosts"
    },
    details: {
      get: {
        _id: 1,
        title: 1,
        summary: 1,
        photo: {
          _id: 1,
          size: 1,
          type: 1,
          filename: 1,
          createdAt: 1,
          updateAt: 1
        },
        createdAt: 1,
      },
      set: {}
    }
  })
  
  return {
    props: {
      initialState: {
        topBlogPosts: blogPosts.body
      },
    },
    revalidate: 3600
  }
}
