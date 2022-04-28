import { HomePageIntroContentContainer } from "elements";
import { HomePageTitle } from "elements";
import { HomePageDescription } from "elements/P";
import React from "react";

export const HomePageIntroContent: React.FC = () => {
  return (
    <HomePageIntroContentContainer>
      <HomePageTitle>طرح تیپ</HomePageTitle>

      <HomePageDescription>طرح تیپ های تایید شده شهرداری</HomePageDescription>
    </HomePageIntroContentContainer>
  );
};
