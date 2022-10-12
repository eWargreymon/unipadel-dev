import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { colores } from "../../colors";
import { useNavigation } from "@react-navigation/core";

import SupNavbar from "../../components/supNavbar";
import { getHorariosTorneo } from "../../api";
import { useIsFocused } from "@react-navigation/native";
import Horario from "../../components/Horario";
import { UserContext } from "../../context/UserDataContext";

const HorariosTorneoScreen = ({ route }) => {

  let torneo = route.params.torneo;
  const usercontext = useContext(UserContext);

  const renderItem = ({ item }) => {
    return <Horario horario={item}/>;
  };

  const [horarios, setHorarios] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const isFocusing = useIsFocused();

  const loadHorarios = async () => {
    const data = await getHorariosTorneo(torneo);
    setHorarios(data.data);
  };

  const onRefresh = React.useCallback(async () => {
    setRefresh(true);
    await loadHorarios();
    setRefresh(false);
  });

  useEffect(() => {
    loadHorarios();
  }, [isFocusing]);

  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <Text style={styles.title}>Horarios creados</Text>
      <View style={styles.titleUnderline}></View>
      <FlatList
        data={horarios}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        style={styles.listado}
        contentContainerStyle={{alignItems: 'center'}}
      />
    </View>
  );
};

export default HorariosTorneoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  },
  title: {
    color: colores.darkblue,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  titleUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: colores.darkblue,
    paddingBottom: 5,
    width: "25%",
  },
  listado:{
    width: "100%",
    marginTop: 5
  }
});
