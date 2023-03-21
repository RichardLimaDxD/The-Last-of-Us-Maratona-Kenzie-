export interface Props {
  children: React.ReactNode;
}

export interface IProviders {
  cards: {
    img: string;
    title: string;
    description: string;
  }[];
  setCards: React.Dispatch<
    React.SetStateAction<
      {
        img: string;
        title: string;
        description: string;
      }[]
    >
  >;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICard {
  card: { img: string; title: string; description: string };
}
