import { HomePageIntroContainer } from "elements";
import React from "react";
import { HomePageIntroBanner, HomePageIntroContent } from "../molecules";

export const HomePageIntro: React.FC = () => {
  return (
    <HomePageIntroContainer>
      <HomePageIntroContent />

      <HomePageIntroBanner />
    </HomePageIntroContainer>
  );
};
