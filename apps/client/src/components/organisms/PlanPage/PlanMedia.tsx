import {
  PlanDetailsImgContainer,
  PlanLargeImg,
  PlanSliderNavigationButton,
} from "elements";
import React, { useEffect, useState } from "react";
import { InitialState, useStore } from "state";
import { FQl_dynamic_upload_IFile } from "state/declarations/schema/schema";
import { FullScreenMediaModal } from "../molecules";

export const PlanMedia: React.FC = () => {
  const {
    plan,
  } = useStore((state: InitialState) => ({
    plan: state?.plan.data,
  }));

  const [medias, setMedias] = useState([]);
  const [activeMedia, setActiveMedia] = useState(medias[0]);
  const [fullScreenMedia, setFullScreenMedia] = useState<
    FQl_dynamic_upload_IFile
  >(null);
  const clearFullScreenMedia = () => setFullScreenMedia(null);

  const changeMedia = (to: "next" | "prev") =>
    setMedias((curr) => {
      const clone = [...curr];
      if (to === "next") {
        clone.push(clone.shift());
      } else {
        clone.unshift(clone.pop());
      }
      return clone;
    });

  useEffect(() => {
    setMedias(() => [plan?.photo, ...(plan?.slider ?? [])]);
  }, [plan]);

  useEffect(() => {
    setActiveMedia(medias[0]);
  }, [medias]);

  return (
    <PlanDetailsImgContainer>
      <PlanLargeImg
        Src={activeMedia?.filename}
        onClick={() => setFullScreenMedia(activeMedia)}
      />

      <FullScreenMediaModal
        on={!!fullScreenMedia}
        toggle={clearFullScreenMedia}
        media={fullScreenMedia}
      />

      <PlanSliderNavigationButton
        direction="right"
        onClick={() => changeMedia("prev")}
      />
      <PlanSliderNavigationButton
        direction="left"
        onClick={() => changeMedia("next")}
      />
    </PlanDetailsImgContainer>
  );
};
