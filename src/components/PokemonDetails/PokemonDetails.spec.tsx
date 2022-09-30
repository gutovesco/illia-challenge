import {
  act,
  render,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import mockFetch from "jest-fetch-mock";
import ContextProviders from "../../ContextProvider";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import pokemonData from "../../mocks/Pokemons.json";
import Details from "src/pages/Details";

const PokemonDetailsFactory = async () => {
  mockFetch.mockResponse(() => {
    return Promise.resolve(JSON.stringify(pokemonData.pokemons));
  });
  render(
    <ContextProviders>
      <MemoryRouter initialEntries={["/pokemon/1"]}>
        <Routes>
          <Route path="pokemon" element={<Details />}>
            <Route path=":id" element={<Details />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ContextProviders>
  );
  await waitFor(() =>
    expect(screen.getByTestId("details-list-section").childNodes)
  );
};

describe("PokemonDetails", () => {
  it("should render the page container", async () => {
    await PokemonDetailsFactory();
    expect(screen.getByTestId("details-list-section")).toBeInTheDocument();
  });

  it("should click on the details button", () => {
    PokemonDetailsFactory();
    expect(screen.getByTestId("details-button")).toBeInTheDocument();
    act(() => screen.getByTestId("details-button").click());
  });

  it("should click on the details button and open the modal", () => {
    PokemonDetailsFactory();
    expect(screen.getByTestId("details-button")).toBeInTheDocument();
    act(() => screen.getByTestId("details-button").click());
    expect(screen.getByText("Fechar")).toBeTruthy();
    fireEvent.click(screen.getByText(/Fechar/i));
  });
});
