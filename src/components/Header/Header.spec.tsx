import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import Details from "src/pages/Details";

const HeaderFactory = async () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Details />}></Route>
      </Routes>
    </MemoryRouter>
  );
};

describe("Header", () => {
  it("should load and show header content", async () => {
    await HeaderFactory();

    expect(screen.getByText("IlliaChallenge")).toBeTruthy();
    expect(screen.getByText("Home")).toBeTruthy();
    fireEvent.click(screen.getByPlaceholderText(/Search…/i));
    expect(screen.getByPlaceholderText("Search…").focus());
  });
});
