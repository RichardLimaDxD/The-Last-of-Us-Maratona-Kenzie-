import React from "react";
import { ContainerEpisodesCards } from "./ContainerEpisodesCards";
import { DescriptionEpisode } from "./DescriptionEpisode";
import { StyledContainerEpisodes } from "./style";

export const ContainerEpisodes = () => {
  return (
    <StyledContainerEpisodes>
      <DescriptionEpisode />
      <ContainerEpisodesCards />
    </StyledContainerEpisodes>
  );
};
