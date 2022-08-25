import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SupNavbar from "../../components/supNavbar";

const OrganizerHomeScreen = () => {

  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <Text>ORGANIZADOR</Text>
    </View>
  );
};

export default OrganizerHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
