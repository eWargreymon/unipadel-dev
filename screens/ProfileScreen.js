import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SupNavbar from '../components/supNavbar'
import BotNavbar from '../components/botNavbar';
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const ProfileScreen = () => {
  const navigation = useNavigation();
  
  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <View style={styles.container}>
      <SupNavbar></SupNavbar>
      <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <BotNavbar></BotNavbar>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },})