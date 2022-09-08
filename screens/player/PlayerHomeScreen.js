import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SupNavbar from "../../components/supNavbar";
import { useNavigation } from "@react-navigation/native";

const PlayerHomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push("ParejaForm");
        }}
      >
        <Text style={styles.buttonText}>Crear pareja</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayerHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    width: "90%",
    padding: 18,
    marginVertical: 10,
    backgroundColor: "#f2f2f2",
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
    textTransform: "uppercase",
  },
});
