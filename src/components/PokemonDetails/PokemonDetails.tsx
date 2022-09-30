import React, { useEffect, useState } from "react";
import { ICards } from "src/interfaces/ICardsDTO";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { INITIAL_CARDS } from "../../mocks/Cards";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { checkPokemonType } from "../../helpers/CheckPokemonType";
import PokeModal from "../PokeModal/PokeModal";
import { useTranslation } from "react-i18next";

const PokemonDetails: React.FC = () => {
  const { t } = useTranslation();
  const params = useParams();
  const [pokemon, setPokemon] = useState<ICards>(INITIAL_CARDS);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.pokemontcg.io/v2/cards?q=id:${params.id}`)
      .then((res) => {
        setPokemon(res.data.data[0]);
      });
  }, [params.id]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div data-testid="details-list-section">
      <Container maxWidth={false}>
        <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "5rem" }}>
          <Card
            sx={{
              minWidth: 550,
              margin: "15px",
              borderRadius: 7,
              backgroundColor: checkPokemonType(
                pokemon.types && pokemon.types.length > 0
                  ? pokemon.types[0]
                  : "Colorless"
              ),
            }}
          >
            <CardMedia
              component="img"
              height="800"
              image={pokemon.images.large}
              alt={pokemon.name}
            />
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "7rem",
              marginTop: "1rem",
            }}
          >
            <Typography gutterBottom variant="h4" component="div">
              {t("Name")}: {pokemon.name}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              {t("Type")}: {pokemon.types}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              Id: {pokemon.id}
            </Typography>
            {pokemon.weaknesses.map((item: any, index: any) => (
              <Typography key={index} gutterBottom variant="h4" component="div">
                {t("Weakness")} - {item.type}
              </Typography>
            ))}
            <Button
              variant="contained"
              data-testid="details-button"
              onClick={() => setOpenModal(true)}
            >
              Detalhes
            </Button>
          </Box>
        </Box>
        <PokeModal
          open={openModal}
          pokemon={pokemon}
          handleClose={handleCloseModal}
        />
      </Container>
    </div>
  );
};

export default PokemonDetails;
