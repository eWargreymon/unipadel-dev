import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";

import SupNavbar from "../../components/supNavbar";
import { getTorneos } from "../../api";
import { useNavigation } from "@react-navigation/core";

const OrganizarTorneoScreen = ({ route }) => {
  const navigation = useNavigation();
  const id = route.params.id;

  const [torneo, setTorneo] = useState("");

  const getTorneo = async () => {
    const data = await getTorneos(id);
    setTorneo(data);
  };

  useEffect(() => {
    getTorneo();
  }, []);

  return (
    <SafeAreaView>
      <SupNavbar></SupNavbar>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>ORGANIZAR COMPETICIÓN</Text>
        <Text>{torneo.nombre}</Text>
        <Text>{torneo.club}</Text>
        <Text>{torneo.formato}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrganizarTorneoScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
    width: "100%",
  },
});
