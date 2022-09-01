import { StyleSheet, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import HomeScreen from './screens/HomeScreen';

import ProfileScreen from './screens/ProfileScreen';

import PlayerNavigation from './screens/player/PlayerNavigation';
import OrganizerNavigation from './screens/organizer/OrganizerNavigation';

import TorneoForm from './screens/organizer/TorneoForm';
import TorneosOrganizadorScreen from './screens/organizer/OrganizerTournamentsScreen';
import OrganizarTorneoScreen from './screens/organizer/OrganizarTorneoScreen';

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release']);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, contentStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="PlayerHome" component={PlayerNavigation}></Stack.Screen>
        <Stack.Screen name="OrganizerHome" component={OrganizerNavigation}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
        <Stack.Screen name="TorneoForm" component={TorneoForm}></Stack.Screen>
        <Stack.Screen name="ListadoTorneosOrganizador" component={TorneosOrganizadorScreen}></Stack.Screen>
        <Stack.Screen name="OrganizarTorneo" component={OrganizarTorneoScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
