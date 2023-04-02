import { Text, FlatList,Image } from "react-native";

import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {

  function renderCategoryItem({ item }) {
    function selectCategoryHandler() {
      // params object
      navigation.navigate("MealsOverview",{
        catId:item.id
      });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={selectCategoryHandler}
      />
    );
  }

  return (
    <>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(category) => category.id}
        numColumns={2}
      />
    </>
  );
}

export default CategoriesScreen;
