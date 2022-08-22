import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PlayerHomeScreen from './screens/player/PlayerHomeScreen';
import OrganizerHomeScreen from './screens/organizer/OrganizerHomeScreen';

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release']);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen options={{headerShown: false }} name="Register" component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="PlayerHome" component={PlayerHomeScreen}></Stack.Screen>
        <Stack.Screen name="OrganizerHome" component={OrganizerHomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
