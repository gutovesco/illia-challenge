import React from "react";

import { PokedexContextProvider } from "./hooks/usePokedex";

interface Props {
  children: React.ReactNode;
}

const ContextProviders: React.FC<Props> = ({ children }) => (
  <PokedexContextProvider>{children}</PokedexContextProvider>
);

export default ContextProviders;
