import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

import SupNavbar from "../../components/supNavbar";
import TournamentBar from "../../components/TournamentBar";
import { colores } from "../../colors";

const GestionarRecursosScreen = ({ route }) => {
  const torneo = route.params.torneo;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <TournamentBar
        nombre={torneo.nombre}
        en_juego={torneo.en_juego}
      ></TournamentBar>
      <View style={styles.asignados}>
        <Text style={styles.title}>Recursos asignados</Text>
        <View style={styles.noRecursos}>
          <Text style={styles.noRecursosText}>
            No hay recursos asignados todavía
          </Text>
        </View>
        <ScrollView></ScrollView>
      </View>
      <View style={styles.spacer}></View>
      <TouchableOpacity
        style={[styles.gestionarButton, styles.shadow]}
        onPress={() => {
          navigation.navigate("RecursoForm");
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={{ resizeMode: "contain", width: 50, height: 50 }}
            source={require("../../assets/images/icons/plus.png")}
          />
        </View>
        <Text style={styles.gestionarText}>Agregar cancha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.gestionarButton, styles.shadow]}>
        <View style={styles.imageContainer}>
          <Image
            style={{ resizeMode: "contain", width: 50, height: 50 }}
            source={require("../../assets/images/icons/calendar.png")}
          />
        </View>
        <Text style={styles.gestionarText}>Ver horario completo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GestionarRecursosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  asignados: {
    width: "90%",
    marginBottom: 10,
  },
  title: {
    marginBottom: 5,
    color: colores.darkblue,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  noRecursos: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: "lightgray",
  },
  noRecursosText: {
    textAlign: "center",
  },
  spacer: {
    width: "80%",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  gestionarButton: {
    width: "90%",
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colores.darkblue,
  },
  gestionarText: {
    marginLeft: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
