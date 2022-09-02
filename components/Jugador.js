import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colores } from "../colors";

const Jugador = ({jugador, addPlayer}) => {

  return (
    <View style={styles.jugador}>
      <View>
        <Text style={styles.jugadorText}>{jugador.name}</Text>
        <Text style={styles.jugadorText}>Alias</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={addPlayer}>
        <Text style={styles.buttonText}>
          Añadir al grupo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Jugador;

const styles = StyleSheet.create({
  jugador: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colores.lightyellow,
    borderColor: colores.yellow,
    padding: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  jugadorText: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
