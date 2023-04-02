import { createContext, useState } from "react";

export const FavouritesContext = createContext();

function FavouritesContextProvider({ children }) {
  const [favMealIds, setFavMealIds] = useState([]);
  function addFavourite(id) {
    setFavMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourite(id) {
    setFavMealIds((currentFavIds) =>
      currentFavIds.filter((favId) => favId !== id)
    );
  }

  const value = {
    favMealIds,
    addFavourite,
    removeFavourite,
  };
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
