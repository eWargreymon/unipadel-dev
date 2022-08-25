import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SupNavbar from "../../components/supNavbar";

const PartidosScreen = () => {
  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <Text>PartidosScreen</Text>
    </View>
  );
};

export default PartidosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
