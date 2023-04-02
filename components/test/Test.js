import React from "react";
import { Text,View,Button } from "react-native";

function Test({ navigation }) {
  function toggleDrawerHandler() {
    navigation.toggleDrawer();
  }

  return (
    <View>
      <Text> Test</Text>
      <View style={{width:160}}>
      <Button title="Toggle Drawer" onPress={toggleDrawerHandler}  />
      </View>
    </View>
  );
}

export default Test;
