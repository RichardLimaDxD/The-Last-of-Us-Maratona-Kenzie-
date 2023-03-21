import React, { createContext, useState } from "react";
import { IProviders, Props } from "./@types";
import img1 from "../../src/assets/The_Last_of_Us_-_When_You're_Lost_in_the_Darkness3.svg";
import img2 from "../../src/assets/The_Last_of_Us_-_Infected4.svg";
import img3 from "../../src/assets/The_Last_of_Us_-_Please_Hold_to_My_Hand2.svg";
import img4 from "../../src/assets/The_Last_of_Us_-_Long_Long_Time2.svg";

export const createProviders = createContext({} as IProviders);

export const ContextsCarsSection = ({ children }: Props) => {
  const [cards, setCards] = useState([
    {
      img: `${img1}`,
      title: "When You're Lost in the Darkness",
      description:
        " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
    },
    {
      img: `${img2}`,
      title: "Infected",
      description:
        " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
    },
    {
      img: `${img3}`,
      title: "Long, Long Time",
      description:
        " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
    },
    {
      img: `${img4}`,
      title: "Please Hold to My Hand",
      description:
        " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
    },
  ]);

  const [menu, setMenu] = useState<boolean>(false);

  return (
    <createProviders.Provider value={{ cards, setCards, menu, setMenu }}>
      {children}
    </createProviders.Provider>
  );
};
