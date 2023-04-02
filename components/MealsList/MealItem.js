import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealItemDetails from "../MealItemDetails";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();

  function mealItemSelectedHandler() {
    navigation.navigate("MealDetails", {
      mealItemId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={styles.androidRipple}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={mealItemSelectedHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <MealItemDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  androidRipple: {
    color: "#ccc",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
