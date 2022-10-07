import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import SupNavbar from "../components/supNavbar";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { colores } from "../colors";

import { UserContext } from "../context/UserDataContext";

const ProfileScreen = () => {
  const usercontext = useContext(UserContext);
  const navigation = useNavigation();

  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        usercontext.reset();
        navigation.replace("Login");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <View style={styles.user}>
        <View style={styles.userIcon}>
          <Image
            style={{ resizeMode: "contain", width: 100 }}
            source={require("../assets/images/icons/player.png")}
          />
        </View>
        <Text style={styles.userText}>{usercontext.user.name}</Text>
      </View>
      <View style={styles.estadisticasContainer}>
        <Text style={styles.estadisticasContainerTitle}>Estadísicas</Text>
        <Text style={styles.estadisticasContainerData}>Partidos jugados:</Text>
        <View style={styles.estadisticasContainerLine} />
        <Text style={styles.estadisticasContainerData}>Victorias:</Text>
        <View style={styles.estadisticasContainerLine} />
        <Text style={styles.estadisticasContainerData}>% Victorias:</Text>
        <View style={styles.estadisticasContainerLine} />
        <Text style={styles.estadisticasContainerData}>Participaciones en torneos:</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.customButton]}
        onPress={() => {
          navigation.push("ParejaForm");
        }}
      >
        <Text style={[styles.buttonText, styles.customText]}>Crear pareja</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.logout]}
        onPress={handleLogOut}
      >
        <Text style={[styles.buttonText, styles.logoutText]}>
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  estadisticasContainer: {
    backgroundColor: colores.yellow,
    width: "90%",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  estadisticasContainerTitle: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  estadisticasContainerLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  estadisticasContainerData:{
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5
  },
  button: {
    width: "90%",
    paddingVertical: 20,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },
  customButton: {
    backgroundColor: "white",
  },
  logout: {
    backgroundColor: "darkred",
  },
  logoutText: {
    color: "white",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 24,
    textTransform: "uppercase",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    padding: 15,
    borderRadius: 10,
    width: "90%",
  },
  userIcon: {
    width: "30%",
  },
  userText: {
    fontSize: 26,
    fontWeight: "bold",
    width: "70%",
    textAlign: "center",
  },
});
