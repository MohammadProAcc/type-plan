import { FQl_dynamic_blogPost_IBlogPost } from "state/declarations/schema/schema"

export interface IBlogPageStore {
  topBlogPosts: FQl_dynamic_blogPost_IBlogPost[];j
}

export const blogPageStore = () => ({
  topBlogPosts: []
})
