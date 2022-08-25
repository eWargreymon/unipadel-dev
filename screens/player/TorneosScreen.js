import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SupNavbar from "../../components/supNavbar";

const TorneosScreen = () => {
  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <Text>TorneosScreen</Text>
    </View>
  );
};

export default TorneosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
