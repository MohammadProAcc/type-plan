import { HomePageIntroCardContainer, HomePageIntroCardLogo } from 'elements';
import { HomePageIntroCardDescription } from 'elements/P';
import React from 'react'

export const HomePageIntroCard: React.FC<HomePageIntroCardProps> = ({
  logo,
  priority,
  children
}) => {
  return (
    <HomePageIntroCardContainer priority={priority}>
      <HomePageIntroCardLogo src={logo} />

      <HomePageIntroCardDescription>
        {children}
      </HomePageIntroCardDescription>
    </HomePageIntroCardContainer>
  )
}

export interface HomePageIntroCardProps {
  logo: string;
  priority: number;
}