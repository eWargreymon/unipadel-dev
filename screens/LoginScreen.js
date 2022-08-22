import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { colores } from "../colors";
import axios from "axios";

import { useNavigation } from "@react-navigation/core";
import Triangles from "../components/triangles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const res = await axios
          .get("http://192.168.0.30:8000/api/getUser/" + user.email)
          .then((result) => {
            if (result.data.data.tipo) {
              navigation.replace("OrganizerHome");
            } else {
              navigation.replace("PlayerHome");
            }
          });
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.imageContainer}>
          <Image
            style={{ resizeMode: "contain", width: 150, height: 150 }}
            source={require("../assets/images/logo/logo1.png")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Usuario</Text>
          <TextInput
            placeholder="Correo de acceso..."
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            placeholder="Contraseña de acceso..."
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Acceder</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linksContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("Register");
            }}
          >
            <Text style={styles.link}>¿No tienes cuenta? ¡Únete gratis!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("Home");
            }}
          >
            <Text style={[styles.link, { textAlign: "right" }]}>
              Continuar como invitado
            </Text>
          </TouchableOpacity>
        </View>

        <Triangles></Triangles>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  label: {
    color: colores.darkblue,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  linksContainer: {
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  link: {
    color: colores.darkblue,
    fontWeight: "bold",
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  button: {
    backgroundColor: colores.darkblue,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "blue",
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: "blue",
  },
});
