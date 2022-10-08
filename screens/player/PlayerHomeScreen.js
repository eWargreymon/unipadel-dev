import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import SupNavbar from "../../components/supNavbar";
import { useNavigation } from "@react-navigation/native";
import UserBar from "../../components/UserBar";
import { colores } from "../../colors";

const PlayerHomeScreen = () => {
  const navigation = useNavigation();

  const [partido, setPartido] = useState("");
  const [competiciones, setCompeticiones] = useState("");

  useEffect(() => {
    setPartido({
      fecha: "10/07/2022",
      id: "1",
      hora: "10:30",
      cancha: "Cancha 15",
      pareja1: "Los panchos",
      pareja2: "Las mariconchis",
      torneo: "Torneo de Verano de la ULPGC",
    });
    setCompeticiones([
      {
        id: "1",
        nombre: "Torneo de Verano de la ULPGC",
        jugados: 5,
        victorias: 3,
      },
      {
        id: "2",
        nombre: "Trofeo Toyota",
        jugados: 1,
        victorias: 0,
      },
      // {
      //   id: "3",
      //   nombre: "Torneo de Verano de la ULPGC",
      //   jugados: 5,
      //   victorias: 3,
      // },
      // {
      //   id: "4",
      //   nombre: "Trofeo Toyota",
      //   jugados: 1,
      //   victorias: 0,
      // },
    ]);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SupNavbar></SupNavbar>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{ backgroundColor: "white" }}
      >
        <UserBar></UserBar>
        <View style={styles.partidoContainer}>
          <Text style={styles.containerTitle}>Próximo partido</Text>
          {partido.length == 0 ? (
            <Text style={styles.containerWarning}>
              En este momento no tiene ningún partido programado
            </Text>
          ) : (
            <View style={styles.partidoInfoContainer}>
              <View>
                <Text style={styles.partidoInfoTorneoText}>
                  {partido.torneo}
                </Text>
              </View>
              <View style={styles.partidoInfoHora}>
                <Text style={styles.partidoInfoText}>{partido.fecha}</Text>
                <Text style={styles.partidoInfoText}>{partido.hora}</Text>
                <Text style={styles.partidoInfoText}>{partido.cancha}</Text>
              </View>
              <View style={styles.partidoInfoParejas}>
                <Text style={styles.partidoParejaText}>{partido.pareja1}</Text>
                <View style={{ width: "20%", alignItems: "center" }}>
                  <Image
                    style={[{ resizeMode: "contain" }]}
                    source={require("../../assets/images/icons/home.png")}
                  />
                </View>
                <Text style={styles.partidoParejaText}>{partido.pareja2}</Text>
              </View>
            </View>
          )}
        </View>
        <View style={styles.competicionContainer}>
          <Text style={styles.containerTitle}>Competiciones actuales</Text>
          {competiciones.length == 0 ? (
            <Text style={styles.containerWarning}>
              En este momento no se encuentra inscrito en ninguna competición
              activa
            </Text>
          ) : (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollView}
            >
              {competiciones.map((data) => (
                <TouchableOpacity style={styles.competicion} key={data.id}>
                  <Text style={styles.nombreComp} numberOfLines={2}>{data.nombre}</Text>
                  <View style={styles.imageContainer}>
                    <Image
                      style={{ resizeMode: "contain", width: 50, height: 50 }}
                      source={require("../../assets/images/icons/trofeo.png")}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.push("PartidosUsuario");
          }}
        >
          <Text style={styles.buttonText}>Mis partidos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.push("InscripcionesUsuario");
          }}
        >
          <Text style={styles.buttonText}>Mis inscripciones</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.push("HistoricoPartidosUsuario");
          }}
        >
          <Text style={styles.buttonText}>Histórico de resultados</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PlayerHomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    // backgroundColor: "white",
  },
  containerTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  partidoContainer: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: colores.lightyellow,
    width: "95%",
    borderRadius: 10,
  },
  partidoInfoContainer: {
    marginVertical: 10,
    borderTopWidth: 1,
    paddingTop: 10,
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
  },
  competicionContainer: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: colores.lightblue,
    width: "95%",
    borderRadius: 10,
  },
  containerWarning: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 5,
    padding: 10,
    borderTopWidth: 1,
    borderRadius: 5,
    fontStyle: "italic",
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: 10,
    justifyContent: "center",
  },
  competicion: {
    backgroundColor: colores.darkblue,
    padding: 5,
    width: 120,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nombreComp: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "white",
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
