import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { colores } from "../colors";
import { useNavigation } from "@react-navigation/core";
import { inscripcion } from "../api";

const Torneo = ({ torneo, state }) => {
  const navigation = useNavigation();

  const handleInscripcion = async (torneo_id) => {
    if (auth.currentUser) {
      const user = auth.currentUser.email;
      const res = await inscripcion({
        torneo: torneo_id,
        user: user,
      })
        .then(() => {
          Alert.alert(
            "¡Inscripción generada!",
            "Se ha generado la inscripción para el torneo. Podrás ver desde tu perfil los torneos a los que te has inscrito. Recuerda que el organizador la validará.",
            [
              {
                text: "¡OK!",
                onPress: () => navigation.push("PlayerHome"),
              },
            ]
          );
        })
        .catch((error) => {
          Alert.alert(
            "Error en la inscripción",
            error.response.data.message,
            [
              {
                text: "Vale",
                style: "cancel",
              },
            ]
          );
        });
    } else {
      Alert.alert(
        "¡No estás autenticado!",
        "Para poder inscribirte en una competición, debes tener cuenta en Unipadel y tener la sesión iniciada",
        [
          {
            text: "Acceso al login",
            onPress: () => navigation.push("Login"),
          },
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
    }
  };

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
        Nº participantes: {torneo.max_jugadores} parejas
      </Text>
      <View style={styles.botones}>
        {torneo.activo == 1 && state && (
          <TouchableOpacity
            style={styles.boton}
            onPress={() => handleInscripcion(torneo.id)}
          >
            <Text style={styles.botonText}>Inscripción</Text>
          </TouchableOpacity>
        )}
        {state && (
          <TouchableOpacity style={[styles.boton, styles.boton2]}>
            <Text style={[styles.botonText, styles.botonText2]}>Más info</Text>
          </TouchableOpacity>
        )}
        {!state && (
          <TouchableOpacity
            style={[styles.boton, styles.boton2]}
            onPress={() =>
              navigation.navigate("OrganizarTorneo", { id: torneo.id })
            }
          >
            <Text style={[styles.botonText, styles.botonText2]}>Gestionar</Text>
          </TouchableOpacity>
        )}
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
  backCerrado: {
    backgroundColor: colores.lightblue,
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
    elevation: 5,
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
    elevation: 10,
  },
  estCerrado: {
    backgroundColor: "darkred",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "absolute",
    top: -15,
    left: -15,
    elevation: 10,
  },
  estText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
