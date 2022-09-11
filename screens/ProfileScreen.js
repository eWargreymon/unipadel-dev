import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import SupNavbar from '../components/supNavbar'
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

import { UserContext } from '../context/UserDataContext';

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
      <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
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