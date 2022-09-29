import React, { createContext, useContext, useState } from "react";
import { ICards } from "../interfaces/ICardsDTO";
import { INITIAL_CARDS } from "../mocks/Cards";

interface Props {
  children: React.ReactNode;
}

interface IPokedexContext {
  cards: ICards[];
  handleSetCards: (value: ICards[]) => void;
}

export const PokedexContext = createContext<IPokedexContext>(
  {} as IPokedexContext
);

export const usePokedex = (): IPokedexContext => {
  const context = useContext(PokedexContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a PokedexContextProvider");
  }

  return context;
};

export const PokedexContextProvider: React.FC<Props> = ({ children }) => {
  const [cards, setCards] = useState<ICards[]>([INITIAL_CARDS]);

  const handleSetCards = (value: ICards[]) => {
    setCards(value);
  };

  return (
    <PokedexContext.Provider
      value={{
        cards,
        handleSetCards,
      }}
      children={children}
    />
  );
};
