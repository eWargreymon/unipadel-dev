import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SupNavbar from "../../components/supNavbar";

const PlayerHomeScreen = () => {

  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <Text>JUGADOR</Text>
    </View>
  );
};

export default PlayerHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
