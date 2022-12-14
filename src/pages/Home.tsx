import React, { useState } from "react";
import Container from "@mui/material/Container";
import { usePokedex } from "src/hooks/usePokedex";
import Header from "src/components/Header/Header";
import { useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pagination from "@mui/material/Pagination";
import PokeCarrousel from "src/components/Carrousel/PokeCarrousel";
import PokeCard from "src/components/PokeCard/PokeCard";

const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const { cards, handleSetCards } = usePokedex();
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSetSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards?orderBy=name&pageSize=14&page=${currentPage}/`
      )
      .then((res) => {
        handleSetCards(res.data.data);
      });
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <>
      <header data-testid="header">
        <Header
          searchValue={searchValue}
          handleSetSearchValue={handleSetSearchValue}
        />
      </header>
      <Container data-testid="cards-list-section" maxWidth={false}>
        {matches ? (
          <>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {cards
                .filter((card) => card.name.includes(searchValue))
                .map((card) => (
                  <PokeCard key={card.id} card={card} />
                ))}
            </Box>
          </>
        ) : (
          <PokeCarrousel cards={cards} />
        )}

        <Box
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Pagination
            data-testid="pagination"
            count={1055}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;
