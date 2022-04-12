import React from 'react';
import { HomePageIntroContentContainer } from 'elements';
import { HomePageTitle } from 'elements';
import { HomePageDescription } from 'elements/P';
import { HomePageIntroCard } from '../atoms';

export const HomePageIntroContent: React.FC = () => {
  return (
    <HomePageIntroContentContainer>
      <HomePageTitle>طرح تیپ</HomePageTitle>

      <HomePageDescription>طرح تیپ های تایید شده شهرداری</HomePageDescription>

      <HomePageIntroCard priority={1} logo="/svg/check-list.svg">
        طرح های تایید شده
      </HomePageIntroCard>

      <HomePageIntroCard priority={2} logo="/svg/search.svg">
        قابلیت جستجوی طرح موردنظر
      </HomePageIntroCard>
    </HomePageIntroContentContainer>
  );
};
