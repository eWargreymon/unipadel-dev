import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import TournamentBar from "../../components/TournamentBar";

import SupNavbar from "../../components/supNavbar";
import { getTorneos } from "../../api";
import { useNavigation } from "@react-navigation/core";
import { colores } from "../../colors";

const GestionarTorneoScreen = ({ route }) => {
  const id = route.params.id;

  const [torneo, setTorneo] = useState("");
  const [dias, setDias] = useState("");

  const getTorneo = async () => {
    const data = await getTorneos(id);
    setTorneo(data.data);
    setDias(
      Math.round((new Date(data.data.fecha_inicio) - new Date()) / 86400000)
    );
  };

  useEffect(() => {
    getTorneo();
  }, []);

  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <TournamentBar
        nombre={torneo.nombre}
        en_juego={torneo.en_juego}
      ></TournamentBar>
      <View style={styles.timer}>
        <View style={styles.imageContainer}>
          <Image
            style={{ resizeMode: "contain", width: 60, height: 60 }}
            source={require("../../assets/images/icons/timer.png")}
          />
        </View>
        <Text style={styles.timerText}>Empieza en: {dias} días</Text>
      </View>
      <View style={styles.gestionarContainer}>
        <TouchableOpacity style={[styles.gestionarButton, styles.shadow]}>
          <Text style={styles.gestionarText}>Gestionar recursos</Text>
          <View style={styles.imageContainer}>
            <Image
              style={{ resizeMode: "contain", width: 60, height: 60 }}
              source={require("../../assets/images/icons/field.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gestionarButton, styles.shadow]}>
          <Text style={styles.gestionarText}>Gestionar recursos</Text>
          <View style={styles.imageContainer}>
            <Image
              style={{ resizeMode: "contain", width: 60, height: 60 }}
              source={require("../../assets/images/icons/player.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.calendarContainer, styles.shadow]}>
        <Text style={styles.calendarText}>Generar Calendario</Text>
        <View style={styles.imageContainer}>
          <Image
            style={{ resizeMode: "contain", width: 60, height: 60 }}
            source={require("../../assets/images/icons/calendar.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.shadow]}>
        <Text style={styles.text}>Editar datos competición</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GestionarTorneoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  timer: {
    marginVertical: 15,
    backgroundColor: colores.darkblue,
    padding: 10,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  timerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
  gestionarContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gestionarButton: {
    width: "45%",
    padding: 20,
    backgroundColor: colores.lightyellow,
    alignItems: "center",
  },
  gestionarText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 5,
  },
  calendarContainer: {
    width: "90%",
    marginVertical: 20,
    backgroundColor: colores.lightblue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  calendarText: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 15,
  },
  button: {
    width: "90%",
    paddingVertical: 25,
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
