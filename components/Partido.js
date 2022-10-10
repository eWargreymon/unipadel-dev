import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Image
} from "react-native";
import React, { useState, useContext } from "react";
import { colores } from "../colors";
import moment from "moment";
import { useNavigation } from "@react-navigation/core";

import { UserContext } from "../context/UserDataContext";

const Partido = ({ partido, state }) => {
  const user = useContext(UserContext);
  
  return (
    <View style={styles.partidoInfoContainer}>
      <View>
        <Text style={styles.partidoInfoTorneoText}>{partido.torneo.nombre}</Text>
      </View>
      <View style={styles.partidoInfoHora}>
        <Text style={styles.partidoInfoText}>{moment(partido.horario.inicio).format("DD-MM-YYYY")}</Text>
        <Text style={styles.partidoInfoText}>{moment(partido.horario.inicio).format("HH:MM")}</Text>
        <Text style={styles.partidoInfoText}>{partido.horario.cancha.nombre}</Text>
      </View>
      <View style={styles.partidoInfoParejas}>
        <Text style={styles.partidoParejaText}>{partido.pareja1.nombre}</Text>
        <View style={{ width: "20%", alignItems: "center" }}>
          <Image
            style={[{ resizeMode: "contain" }]}
            source={require("../assets/images/icons/home.png")}
          />
        </View>
        <Text style={styles.partidoParejaText}>{partido.pareja2.nombre}</Text>
      </View>
    </View>
  );
};

export default Partido;

const styles = StyleSheet.create({
  partidoInfoContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: colores.lightyellow,
    width: "95%",
    borderRadius: 10,
  },
  partidoInfoTorneoText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  partidoInfoText: {
    textAlign: "center",
    width: "33%",
    fontWeight: "bold",
  },
  partidoInfoHora: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  partidoInfoParejas: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  partidoParejaText: {
    fontSize: 16,
    fontWeight: "bold",
    width: "40%",
    textAlign: "center",
    textTransform: "uppercase",
    color: colores.darkblue,
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 5
  },
});
