import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colores } from "../colors";
import moment from "moment";

const Partido = ({
  partido,
  handleHorario,
  handleHorarioPropuesto,
  hasActions,
  isPlayer,
  aceptarPropuesta,
  rechazarPropuesta
}) => {
  return (
    <View style={{ width: "100%" }}>
      {partido.propio &&
        partido.propuesta != null &&
        partido.propuesta_externa && (
          <View style={{borderTopColor: "gray", borderTopWidth: 2, borderBottomColor: "lightgray", borderBottomWidth: 2}}>
            <Text style={{textAlign: "center", marginTop: 5}}>La pareja rival ha propuesto un horario</Text>
            <Text style={{textAlign: "center"}}>
              El día {moment(partido.fechor_propuesta).format("DD-MM-YYYY")} a
              las {moment(partido.fechor_propuesta).format("HH:mm")}
            </Text>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
              <TouchableOpacity style={{borderRadius: 5, marginVertical: 5, backgroundColor: colores.green, marginHorizontal: 10, padding: 5}} onPress={() => aceptarPropuesta(partido.id)}>
                <Text style={{color: "white"}}>Aceptar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius: 5, marginVertical: 5, backgroundColor: "darkred", marginHorizontal: 10, padding: 5}} onPress={() => rechazarPropuesta(partido.id)}>
                <Text style={{color: "white"}}>Rechazar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {partido.propio &&
          partido.propuesta != null &&
          partido.propuesta_externa == false && (
            <View>
              <Text style={{textAlign: "center"}}>Esperando respuesta del rival</Text>
            </View>
          )}
      <View
        style={[
          styles.partidoInfoContainer,
          isPlayer && partido.propio && styles.partidoPropioColor,
        ]}
      >
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
        {hasActions && (
          <View style={styles.accionesPartido}>
            {isPlayer ? (
              partido.propio && (
                <TouchableOpacity
                  style={[
                    styles.accionesButton,
                    { backgroundColor: colores.darkblue },
                  ]}
                  onPress={() => handleHorarioPropuesto(partido.id)}
                >
                  <Text style={styles.accionesButtonText}>
                    Proponer horario
                  </Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                style={[
                  styles.accionesButton,
                  { backgroundColor: colores.darkblue },
                ]}
                onPress={() => handleHorario(partido.id)}
              >
                <Text style={styles.accionesButtonText}>Asignar horario</Text>
              </TouchableOpacity>
            )}
            {isPlayer ? (
              partido.propio && (
                <TouchableOpacity
                  style={[
                    styles.accionesButton,
                    { backgroundColor: colores.green },
                  ]}
                >
                  <Text style={styles.accionesButtonText}>
                    Proponer resultado
                  </Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                style={[
                  styles.accionesButton,
                  { backgroundColor: colores.green },
                ]}
              >
                <Text style={styles.accionesButtonText}>Asignar resultado</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
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
  partidoPropioColor: {
    backgroundColor: colores.lightblue,
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
  accionesPartido: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  accionesButton: {
    width: 150,
    padding: 5,
    borderRadius: 10,
  },
  accionesButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
