export const checkPokemonType = (type: string): any => {
  const dictionary: Record<string, string> = {
    Water: "#48acea",
    Grass: "#87db76",
    Psychic: "#c175ea",
    Metal: "#a3a3a3",
    Fire: "#f24b4b",
    Normal: "#ffffff",
    Fighting: "#f2773a",
    Colorless: "#ffffff",
    Darkness: "#ffffff",
    Lightning: "#f4e96b",
    Fairy: "#ed80d9",
  };

  return dictionary[type];
};
