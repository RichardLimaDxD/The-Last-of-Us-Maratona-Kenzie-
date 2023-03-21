import React from "react";
import { ICard } from "../../../../providers/@types";
import { StyledRenderEpisodesCards } from "./style";

export const RenderEpisodesCards = ({ card }: ICard) => {
  return (
    <StyledRenderEpisodesCards>
      <li>
        <img src={card.img} alt="imgCards" />
      </li>
      <div>
        <li>
          <h2>{card.title}</h2>
        </li>
        <li>
          <p>{card.description}</p>
        </li>
      </div>
    </StyledRenderEpisodesCards>
  );
};
