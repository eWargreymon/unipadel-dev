import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { colores } from "../colors";
import { useNavigation } from "@react-navigation/core";
import { inscripcion } from "../api";
import SelectorPareja from "./SelectorPareja";

import { UserContext } from "../context/UserDataContext";

const Torneo = ({ torneo, state }) => {
  const user = useContext(UserContext);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [torneoId, setTorneoId] = useState(0);

  const handleInscripcion = async (parejaId) => {
    if (auth.currentUser) {
      const res = await inscripcion({
        torneo: torneoId,
        pareja: parejaId,
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
          Alert.alert("Error en la inscripción", error.response.data.message, [
            {
              text: "Vale",
              style: "cancel",
            },
          ]);
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
    <View style={[styles.torneo, torneo.estado == 0 ? styles.no_empezado : torneo.estado == 1 ? styles.empezado : styles.finalizado]}>
      {auth.currentUser && user.user.tipo == 0 && (
        <SelectorPareja
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleInscripcion={handleInscripcion}
        ></SelectorPareja>
      )}
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
        Nº participantes: {torneo.max_parejas} parejas
      </Text>
      <View style={styles.botones}>
        {torneo.estado == 0 && state && (
          <TouchableOpacity
            style={styles.boton}
            onPress={() => {
              setTorneoId(torneo.id);
              setModalVisible(true);
            }}
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
              navigation.navigate("GestionarTorneo", { id: torneo.id })
            }
          >
            <Text style={[styles.botonText, styles.botonText2]}>Gestionar</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={[styles.estado, torneo.estado == 0 ? styles.no_empezadoEst : torneo.estado == 1 ? styles.empezadoEst : styles.finalizadoEst]}
      >
        <Text style={styles.estText}>
          {torneo.estado == 0 ? "No empezado" : torneo.estado == 1 ? "En juego" : "Finalizado"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Torneo;

const styles = StyleSheet.create({
  torneo: {
    borderRadius: 10,
    padding: 15,
    marginTop: 25,
    width: 400,
    maxWidth: "90%",
  },
  no_empezado: {
    backgroundColor: colores.lightyellow,
  },
  empezado: {
    backgroundColor: colores.lightblue,
  },
  finalizado: {
    backgroundColor: "lightgreen",
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
  estado:{
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "absolute",
    top: -15,
    left: -15,
    elevation: 10,
  },
  no_empezadoEst: {
    backgroundColor: colores.darkblue,
  },
  empezadoEst: {
    backgroundColor: colores.green,
  },
  finalizadoEst: {
    backgroundColor: colores.orange,
  },
  estText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
