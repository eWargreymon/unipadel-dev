import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { attemptLogin } from "../api";
import { CountContext } from "../screens/context/ReferenceDataContext";

const UserBar = () => {
  const usuarioContext = useContext(CountContext);
  const [user, setUser] = useState("");

  const getUser = async () => {
    const res = await attemptLogin(auth.currentUser.email);
    setUser(res);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.userBar}>
      <View style={styles.circle}></View>
      <Text style={styles.text}>{usuarioContext.user.name}</Text>
      <Text style={styles.separador}>|</Text>
      <Text style={styles.text}>{usuarioContext.user.tipo == 1 ? "Organizador" : "Jugador"}</Text>
    </View>
  );
};

export default UserBar;

const styles = StyleSheet.create({
    userBar : {
        width: "90%",
        backgroundColor: "lightgrey",
        borderRadius: 5,
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    circle:{
        width: 15,
        height: 15,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "green",
    },
    separador: {
        marginHorizontal: 5,
        fontWeight: "bold",
    },
    text:{
        fontWeight: "bold",
    }

});
