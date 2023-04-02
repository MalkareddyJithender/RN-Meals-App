import { Text, View, StyleSheet } from "react-native";
// import { useContext } from "react";
// import { FavouritesContext } from "../store/context/favouritesContext";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummyData";
import { useSelector } from 'react-redux';

function FavouritesScreen() {
  // const { favMealIds } = useContext(FavouritesContext);
  const favMealIds = useSelector((state) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));
  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }
  // console.log("favourites Data :",favourites);
  return <MealsList items={favouriteMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
