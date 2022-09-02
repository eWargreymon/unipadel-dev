import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";

import SupNavbar from "../../components/supNavbar";
import { colores } from "../../colors";
import { createPareja, getJugadores } from "../../api";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";
import Jugador from "../../components/Jugador";

const ParejaForm = () => {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState("");
  const [jugadores, setJugadores] = useState([]);
  
  const jugadoresParejaActual = [];
  const [jugadoresPareja, setJugadoresPareja] = useState([]);

  const onChangeSearch = async (query) => {
    const data = await getJugadores(query);
    setJugadores(data.data);
  };

  const datosPareja = {
    nombre: nombre
  };

  const loadJugadores = async () => {
    const data = await getJugadores();
    setJugadores(data.data);
  };

  // Función para hacer el guardado de la info en la base de datos y mostrar mensaje de aviso
  const handleStore = async () => {
    const res = await createPareja(datosPareja)
      .then(() => {
        Alert.alert(
          "¡Torneo creado!",
          "Se ha creado un torneo con los datos proporcionados. Podrás gestionarlo desde tu perfil",
          [
            {
              text: "¡OK!",
              onPress: () => navigation.pop(),
            },
          ]
        );
      })
      .catch(() => {
        Alert.alert(
          "Error en el guardado",
          "Ha surgido un error y no se ha podido guardar la información. Por favor, revise la información y vuelva a intentarlo.",
          [
            {
              text: "Vale",
              style: "cancel",
            },
          ]
        );
      });
  };

  const goBack = () => {
    navigation.pop();
  };

  useEffect(() => {
    loadJugadores();
  }, []);

  function addPlayer(player) {
      setJugadoresPareja([...jugadoresPareja, player.id]);
  }

  return (
    <SafeAreaView>
      <SupNavbar></SupNavbar>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Crear Pareja</Text>
        <View style={styles.titleUnderline}></View>
        <View>
          <Text>Datos de la pareja</Text>
          <Text>Nombre: {datosPareja.nombre}</Text>
          <Text>Jugadores: {jugadoresPareja}</Text>
        </View>

        {/* Comienzo de los inputs */}
        {/* NOMBRE */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            placeholder="Nombre del torneo"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
            style={styles.input}
          />
        </View>

        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={jugadores}
        />

        {/* JUGADORES */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Jugadores</Text>
          {jugadores.map((item, key) => (
            // <Jugador jugador={item} addPlayer={addPlayer(item)} key={item.id}/>
            <View style={styles.jugador} key={item.id}>
              <View>
                <Text style={styles.jugadorText}>{item.name}</Text>
                <Text style={styles.jugadorText}>Alias</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => addPlayer(item)}
              >
                <Text style={styles.buttonText}>Añadir al grupo</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleStore()}>
              <Text style={styles.buttonText}>Crear pareja</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "darkred" }]}
              onPress={() => goBack()}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParejaForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
    width: "100%",
  },
  title: {
    color: colores.darkblue,
    fontSize: 20,
    fontWeight: "bold",
  },
  titleUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: colores.darkblue,
    paddingBottom: 5,
    width: "25%",
  },
  inputContainer: {
    width: "90%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    color: "grey",
  },
  label: {
    color: colores.darkblue,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    marginVertical: 20,
    width: "80%",
  },
  button: {
    backgroundColor: colores.darkblue,
    width: "100%",
    padding: 15,
    borderRadius: 2,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    textTransform: "uppercase",
  },
  jugador: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colores.lightyellow,
    borderColor: colores.yellow,
    padding: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  jugadorText: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
