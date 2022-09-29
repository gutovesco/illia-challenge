import React from "react";
import { ICards } from "src/interfaces/ICardsDTO";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { checkPokemonType } from "../../helpers/CheckPokemonType";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

interface IPokeCard {
  card: ICards;
}

const PokeCard: React.FC<IPokeCard> = ({ card }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: 200,
        margin: "15px",
        border: "1px solid #e5d36b",
        backgroundColor: checkPokemonType(
          card.types && card.types.length > 0 ? card.types[0] : "Colorless"
        ),
      }}
      key={card.id}
      onClick={() => navigate(`/pokemon/${card.id}`)}
    >
      <CardMedia
        component="img"
        height="280"
        image={card.images.small}
        alt={card.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {card.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Tipo: {card.types}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Id: {card.id}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokeCard;
