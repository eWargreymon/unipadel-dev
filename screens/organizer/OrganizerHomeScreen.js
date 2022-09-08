import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

import SupNavbar from "../../components/supNavbar";
import UserBar from "../../components/UserBar";
import { useNavigation } from "@react-navigation/core";
import { colores } from "../../colors";

const OrganizerHomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <UserBar></UserBar>
      <View style={[styles.compContainer, styles.enJuego]}>
        <Text style={styles.title}>Competiciones en juego</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          <TouchableOpacity style={styles.competicion}>
            <Text style={styles.nombreComp}>Nombre competicion</Text>
            <View style={styles.imageContainer}>
              <Image
                style={{ resizeMode: "contain", width: 50, height: 50 }}
                source={require("../../assets/images/icons/trofeo.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.competicion}>
            <Text style={styles.nombreComp}>Nombre del torneo</Text>
            <View style={styles.imageContainer}>
              <Image
                style={{ resizeMode: "contain", width: 50, height: 50 }}
                source={require("../../assets/images/icons/medalla.png")}
              />
            </View>
          </TouchableOpacity>
          {/* <View style={styles.competicion}>
            <Text style={styles.nombreComp}>Nombre competicion</Text>
            <View style={styles.imageContainer}>
              <Image
                style={{ resizeMode: "contain", width: 50, height: 50 }}
                source={require("../../assets/images/icons/trofeo.png")}
              />
            </View>
          </View>
          <View style={styles.competicion}>
            <Text style={styles.nombreComp}>Nombre competicion</Text>
            <View style={styles.imageContainer}>
              <Image
                style={{ resizeMode: "contain", width: 50, height: 50 }}
                source={require("../../assets/images/icons/trofeo.png")}
              />
            </View>
          </View>
          <View style={styles.competicion}>
            <Text style={styles.nombreComp}>Nombre competicion</Text>
            <View style={styles.imageContainer}>
              <Image
                style={{ resizeMode: "contain", width: 50, height: 50 }}
                source={require("../../assets/images/icons/trofeo.png")}
              />
            </View>
          </View> */}
        </ScrollView>
      </View>
      <View style={[styles.compContainer, styles.organizadas]}>
        <Text style={styles.title}>Competiciones organizadas</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          <TouchableOpacity style={[styles.competicion, styles.backBlue]}>
            <Text style={[styles.nombreComp, styles.textWhite]}>Nombre competicion</Text>
            <View style={styles.imageContainer}>
              <Image
                style={{ resizeMode: "contain", width: 50, height: 50 }}
                source={require("../../assets/images/icons/trofeo.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.competicion, styles.backBlue]}>
            <Text style={[styles.nombreComp, styles.textWhite]}>Nombre del torneo</Text>
            <View style={styles.imageContainer}>
              <Image
                style={{ resizeMode: "contain", width: 50, height: 50 }}
                source={require("../../assets/images/icons/medalla.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.competicion, styles.backBlue]}>
            <Text style={[styles.nombreComp, styles.textWhite]}>Nombre competicion</Text>
            <View style={styles.imageContainer}>
              <Image
                style={{ resizeMode: "contain", width: 50, height: 50 }}
                source={require("../../assets/images/icons/trofeo.png")}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push("TorneoForm");
        }}
      >
        <Text style={styles.buttonText}>Crear competición</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push("ListadoTorneosOrganizador");
        }}
      >
        <Text style={styles.buttonText}>Competiciones creadas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrganizerHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  compContainer:{
    width: "90%",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  enJuego: {
    backgroundColor: colores.lightyellow,
  },
  organizadas: {
    backgroundColor: colores.lightblue,
  },
  scrollView: {
    marginTop: 10,
    flexGrow: 1,
    justifyContent: 'center',
  },
  competicion: {
    backgroundColor: colores.lightblue,
    padding: 5,
    width: 120,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backBlue:{
    backgroundColor: colores.darkblue,
  },
  nombreComp: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  textWhite:{
    color: "white"
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
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
