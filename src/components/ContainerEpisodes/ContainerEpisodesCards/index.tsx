import React, { useContext } from "react";
import { createProviders } from "../../../providers";
import { RenderEpisodesCards } from "./RenderEpisodesCards";
import { StyledContainerEpisodesCards } from "./style";

export const ContainerEpisodesCards = () => {
  const { cards } = useContext(createProviders);

  return (
    <StyledContainerEpisodesCards>
      {cards.map((card, index) => (
        <RenderEpisodesCards card={card} key={index} />
      ))}
    </StyledContainerEpisodesCards>
  );
};
