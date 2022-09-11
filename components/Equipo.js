import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Equipo = ({ equipo }) => {
  return (
    <View style={styles.equipo}>
      <Text style={styles.nombre}>{equipo.nombre}</Text>
      <View style={styles.jugadores}>
        {equipo.usuarios.map((i, k) => {
          return <Text key={i.id}>{i.name}</Text>;
        })}
      </View>
    </View>
  );
};

export default Equipo;

const styles = StyleSheet.create({
  equipo: {
    width: 300,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  jugadores: {
    marginBottom: 10,
    backgroundColor: "lightgreen",
    padding: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
});
