import React from 'react';
import {
  BlogPageLastPostEl,
  BlogPageLastPostContainer,
  BlogPageLastPostHeader,
  BlogPageLastPostHeaderH3,
  BlogPageLastPostContent,
  BlogPageLastPostFooter,
  BlogPageLastPostInf,
  BlogPageLastPostWriter,
  BlogPageLastPostDate,
  BlogLastPostButton,
  BlogPageLastPostImgContainer,
  BlogPageLastPostImg,
} from 'elements';
import { P } from 'elements/P';

export const BlogPageLastPost: React.FC<BlogPageLastPostProps> = (props) => {
  return (
    <BlogPageLastPostEl>
      <BlogPageLastPostContainer>
        <BlogPageLastPostHeader>
          <BlogPageLastPostHeaderH3>
            ساخت قایق های خودران با کمک هوش مصنوعی
          </BlogPageLastPostHeaderH3>
        </BlogPageLastPostHeader>

        <BlogPageLastPostContent>
          <P>
            ساخت قایق های خودران با کمک هوش مصنوعی ساخت قایق های خودران با کمک
            هوش مصنوعی ساخت قایق های خودران با کمک هوش مصنوعی ساخت قایق های
            خودران با کمک هوش مصنوعی
          </P>
        </BlogPageLastPostContent>

        <BlogPageLastPostFooter>
          <BlogPageLastPostInf>
            <BlogPageLastPostWriter>علی علوی</BlogPageLastPostWriter>
            <BlogPageLastPostDate>1401.2.29</BlogPageLastPostDate>
          </BlogPageLastPostInf>

          <BlogLastPostButton>دامه مطلب</BlogLastPostButton>
        </BlogPageLastPostFooter>
      </BlogPageLastPostContainer>

      <BlogPageLastPostImgContainer>
        <BlogPageLastPostImg />
      </BlogPageLastPostImgContainer>
    </BlogPageLastPostEl>
  );
};

export interface BlogPageLastPostProps {}
