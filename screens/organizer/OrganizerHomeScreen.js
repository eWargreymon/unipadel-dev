import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import SupNavbar from "../../components/supNavbar";
import { useNavigation } from "@react-navigation/core";

const OrganizerHomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <Text>ORGANIZADOR</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push("TorneoForm");
        }}
      >
        <Text style={styles.buttonText}>CREAR COMPETICIÓN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrganizerHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    width: "90%",
    padding: 18,
    backgroundColor: "#f2f2f2",
    // elevation: 5
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
