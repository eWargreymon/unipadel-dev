import { StyleSheet, Text, View, FlatList, RefreshControl } from "react-native";
import React, {useState, useEffect} from "react";
import SupNavbar from "../../components/supNavbar";

import { colores } from "../../colors";
import { useIsFocused } from "@react-navigation/native";
import Torneo from "../../components/Torneo";
import { getTorneos, getParejas } from "../../api";
import { auth } from "../../firebase";

const TorneosScreen = () => {
  const renderItem = ({ item }) => {
    return <Torneo torneo={item} state={true} parejas={parejas}></Torneo>;
  };
  const [parejas, setParejas] = useState([]);
  const loadParejas = async () => {
    const data = await getParejas(auth.currentUser.email);
    setParejas(data);
  };

  const [torneos, setTorneos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const isFocusing = useIsFocused();

  const loadTorneos = async () => {
    const data = await getTorneos();
    setTorneos(data);
  };

  const onRefresh = React.useCallback(async () => {
    setRefresh(true);
    await loadTorneos();
    setRefresh(false);
  });

  useEffect(() => {
    loadTorneos();
    loadParejas();
  }, [isFocusing]);

  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <Text style={styles.title}>TORNEOS</Text>
      <View style={styles.titleUnderline}></View>
      <FlatList
        data={torneos}
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

export default TorneosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
    width: "100%",
    backgroundColor: "white"
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
});
