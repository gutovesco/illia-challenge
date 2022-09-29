import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "src/pages/Details";
import Home from "src/pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="pokemon" element={<Details />}>
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
