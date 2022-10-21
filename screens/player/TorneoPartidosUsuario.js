import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useIsFocused } from "@react-navigation/native";
import { colores } from "../../colors";

import { getPartidosTorneoPlayer, getJornadas } from "../../api";
import { UserContext } from "../../context/UserDataContext";

import SupNavbar from "../../components/supNavbar";
import Partido from "../../components/Partido";
import SelectorHorario from "../../components/SelectorHorario";

const TorneoPartidosUsuario = ({ route }) => {
  const torneo = route.params.torneo;
  const usercontext = useContext(UserContext);
  
  const [partidos, setPartidos] = useState([]);
  const [jornadas, setJornadas] = useState([]);
  const [jornadaPulsada, setJornadaPulsada] = useState(0);

  const [refresh, setRefresh] = useState(false);
  const isFocusing = useIsFocused();

  const [modalVisibleHorario, setModalVisibleHorario] = useState(false);
  const [partidoSelected, setPartidoSelected] = useState("");

  const loadPartidos = async () => {
    let request = {
      torneo: torneo.id,
      jugador: usercontext.id
    };
    const data = await getPartidosTorneoPlayer(request);
    setPartidos(data.data);
  };

  const loadPartidosJornada = async (jornada) => {
    setJornadaPulsada(jornada.numero);
    let request =
      jornada.numero == 0
        ? {
            torneo: torneo.id,
            jugador: usercontext.id
          }
        : {
            jornada: jornada.id,
            jugador: usercontext.id
          };
    const data = await getPartidosTorneoPlayer(request);
    setPartidos(data.data);
  };

  const loadJornadas = async () => {
    const data = await getJornadas(torneo.id);
    setJornadas(data.data);
  };

  const onRefresh = React.useCallback(async () => {
    setRefresh(true);
    await loadPartidos();
    setJornadaPulsada(0);
    setRefresh(false);
  });

  useEffect(() => {
    loadJornadas();
    loadPartidos();
  }, [isFocusing]);

  const handleHorario = (id) => {
    setPartidoSelected(id);
    setModalVisibleHorario(true);
  }

  const renderItem = ({ item }) => {
    return <Partido partido={item} handleHorario={handleHorario} hasActions={true} isPlayer={true}></Partido>;
  };

  return (
    <View style={styles.container}>
      <SelectorHorario
        modalVisible={modalVisibleHorario}
        setModalVisible={setModalVisibleHorario}
        partido={partidoSelected}
        torneo={torneo.id}
        user={usercontext.id}
        onRefresh={onRefresh}
      ></SelectorHorario>
      <SupNavbar></SupNavbar>
      <Text style={styles.title}>Partidos de la competición</Text>
      <View style={styles.titleUnderline}></View>
      <View style={{ width: "95%", height: 40, marginTop: 10 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <TouchableOpacity
            style={[
              styles.jornada,
              jornadaPulsada == 0 && styles.jornadaPulsada,
            ]}
            onPress={() => loadPartidosJornada({ id: 0, numero: 0 })}
          >
            <Text
              style={[
                styles.jornadaText,
                jornadaPulsada == 0 && styles.jornadaPulsadaText,
              ]}
            >
              Todos
            </Text>
          </TouchableOpacity>
          {jornadas.map((item, key) => (
            <TouchableOpacity
              style={[
                styles.jornada,
                jornadaPulsada == item.numero && styles.jornadaPulsada,
              ]}
              key={item.id}
              onPress={() => loadPartidosJornada(item)}
            >
              <Text
                style={[
                  styles.jornadaText,
                  jornadaPulsada == item.numero && styles.jornadaPulsadaText,
                ]}
              >
                Jornada {item.numero}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={partidos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        style={styles.listado}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default TorneoPartidosUsuario;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
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
  listado: {
    width: "100%",
    marginTop: 5,
  },
  jornada: {
    padding: 5,
    marginHorizontal: 1,
    backgroundColor: colores.lightblue,
    borderWidth: 1,
    borderColor: "#92cded",
    borderRadius: 5,
  },
  jornadaPulsada: {
    backgroundColor: colores.darkblue,
    borderColor: colores.darkblue,
  },
  jornadaText: {
    fontSize: 18,
  },
  jornadaPulsadaText: {
    color: "white",
  },
});
