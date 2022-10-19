import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import React from "react";
import { colores } from "../colors";
import moment from "moment";

const Partido = ({ partido, handleHorario }) => {

  return (
    <View style={styles.partidoInfoContainer}>
      <View>
        <Text style={styles.partidoInfoTorneoText}>
          {partido.torneo.nombre} - Jornada {partido.jornada.numero}
        </Text>
      </View>
      <View style={styles.partidoInfoHora}>
        {partido.horario_id != null && (
          <Text style={styles.partidoInfoText}>
            {moment(partido.horario.inicio).format("DD-MM-YYYY")}
          </Text>
        )}
        {partido.horario_id != null && (
          <Text style={styles.partidoInfoText}>
            {moment(partido.horario.inicio).format("HH:mm")}
          </Text>
        )}
        {partido.horario_id != null && (
          <Text style={styles.partidoInfoText}>
            {partido.horario.cancha.nombre}
          </Text>
        )}
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
      <View style={styles.accionesPartido}>
          <TouchableOpacity style={[styles.accionesButton, {backgroundColor: colores.darkblue,}]} onPress={() => handleHorario(partido.id)}>
            <Text style={styles.accionesButtonText}>Asignar horario</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.accionesButton, {backgroundColor: colores.green,}]}>
            <Text style={styles.accionesButtonText}>Asignar resultado</Text>
          </TouchableOpacity>
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
    borderRadius: 5,
  },
  accionesPartido:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  accionesButton:{
    marginHorizontal: 20,
    width: "40%",
    padding: 5,
    borderRadius: 10
  },
  accionesButtonText:{
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});
