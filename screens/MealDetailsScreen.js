import { useContext, useLayoutEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import MealItemDetails from "../components/MealItemDetails";
import SubTitle from "../components/MealDetails/SubTitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/MealDetails/IconButton";
import { MEALS } from "../data/dummyData";
// import { FavouritesContext } from "../store/context/favouritesContext";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../store/redux/features/favouritesSlice";

function MealDetailsScreen({ route, navigation }) {
  // const favourites = useContext(FavouritesContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();
  const mealItemId = route.params.mealItemId;
  const mealItem = MEALS.find((meal) => meal.id === mealItemId);
  const mealIsFavourite = favouriteMealIds.includes(mealItemId);

  // console.log("mealIsFavourite", mealIsFavourite,favourites);
  console.log("addFavourite", addFavourite());
  console.log("removeFavourite", removeFavourite({ id: "123" }));

  function changeFavouritesStatusHandler() {
    if (mealIsFavourite) {
      // favourites.removeFavourite(mealItemId);
      dispatch(
        removeFavourite({
          id: mealItemId,
        })
      );
    } else {
      // favourites.addFavourite(mealItemId);
      dispatch(
        addFavourite({
          id: mealItemId,
        })
      );
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            size={24}
            onPress={changeFavouritesStatusHandler}
          />
        );
      },
    });
  }, [mealIsFavourite, favouriteMealIds]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: mealItem.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{mealItem.title}</Text>
        <MealItemDetails
          duration={mealItem.duration}
          affordability={mealItem.affordability}
          complexity={mealItem.complexity}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <SubTitle>Ingredients</SubTitle>
            <List data={mealItem.ingredients} />
            <SubTitle>Steps</SubTitle>
            <List data={mealItem.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  detailText: {
    color: "#fff",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
