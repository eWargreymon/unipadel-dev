import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colores } from "../colors";

const Torneo = ({ torneo }) => {
  console.log(torneo);
  return (
    <View style={[styles.torneo, torneo.activo == 0 && styles.backCerrado]}>
      <Text style={styles.nombre}>{torneo.nombre}</Text>
      <Text style={[styles.contentText, { textAlign: "center" }]}>
        {torneo.fecha_inicio} al {torneo.fecha_fin}
      </Text>
      <Text style={styles.contentText}>Localización: {torneo.ciudad}</Text>
      <Text style={styles.contentText}>Club: {torneo.club}</Text>
      <Text style={styles.contentText}>
        Formato: {torneo.formato ? "Liga" : "Eliminatorias"}
      </Text>
      <Text style={styles.contentText}>
        Nº participantes: {torneo.max_jugadores} jugadores /{" "}
        {torneo.max_jugadores / 2} parejas
      </Text>
      <View style={styles.botones}>
        {
            torneo.activo == 1 &&
            <TouchableOpacity style={styles.boton}>
              <Text style={styles.botonText}>Inscripción</Text>
            </TouchableOpacity>
        }
        <TouchableOpacity style={[styles.boton, styles.boton2]}>
          <Text style={[styles.botonText, styles.botonText2]}>Más info</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={torneo.activo ? styles.estAbierto : styles.estCerrado}
      >
        <Text style={styles.estText}>
          {torneo.activo ? "Abierto" : "Cerrado"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Torneo;

const styles = StyleSheet.create({
  torneo: {
    backgroundColor: colores.lightyellow,
    borderRadius: 10,
    padding: 15,
    marginTop: 25,
    width: 400,
    maxWidth: "90%",
  },
  backCerrado:{
    backgroundColor: colores.lightblue
  },
  nombre: {
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  contentText: {
    fontWeight: "bold",
    marginTop: 2,
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  boton: {
    backgroundColor: colores.darkblue,
    borderRadius: 15,
    padding: 10,
    width: "40%",
    elevation: 5
  },
  botonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  boton2: {
    backgroundColor: "white",
  },
  botonText2: {
    color: colores.darkblue,
  },
  estAbierto: {
    backgroundColor: colores.green,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "absolute",
    top: -15,
    left: -15,
    elevation: 10
  },
  estCerrado: {
    backgroundColor: "darkred",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "absolute",
    top: -15,
    left: -15,
    elevation: 10
  },
  estText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
