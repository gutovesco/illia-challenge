import React from "react";
import { ICards } from "src/interfaces/ICardsDTO";
import { Carousel } from "react-responsive-carousel";

interface IPokeCarrousel {
  cards: ICards[];
}

const PokeCarrousel: React.FC<IPokeCarrousel> = ({ cards }) => {
  return (
    <Carousel>
      {cards.map((card: ICards) => (
        <div key={card.id}>
          <img src={card.images.large} alt={card.name} />
        </div>
      ))}
    </Carousel>
  );
};

export default PokeCarrousel;
