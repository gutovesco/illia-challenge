import { act, render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/Home";
import mockFetch from "jest-fetch-mock";
import ContextProviders from "../ContextProvider";
import pokemonData from "../mocks/Pokemons.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomeFactory = async () => {
  mockFetch.mockResponse(() => {
    return Promise.resolve(JSON.stringify(pokemonData.pokemons));
  });
  render(
    <ContextProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProviders>
  );
  await waitFor(() =>
    expect(screen.getByTestId("cards-list-section").childNodes)
  );
};

describe("Home", () => {
  beforeEach(() => {
    mockFetch.enableMocks();
    mockFetch.resetMocks();
  });

  it("should render the page container", async () => {
    await HomeFactory();
    expect(screen.getByTestId("cards-list-section")).toBeInTheDocument();
  });

  it("should render the header", async () => {
    await HomeFactory();
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should render and enable clicking the pagination", async () => {
    await HomeFactory();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
    act(() => screen.getByTestId("pagination").click());
  });

  it("should render the monsters list", () => {
    HomeFactory();
    const pokemonsItemsCount =
      screen.getByTestId("cards-list-section").childNodes.length;
    expect(pokemonsItemsCount - 1).toBe(pokemonData.pokemons.length);
  });
});
