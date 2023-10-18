import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Welcome1, Welcome2, Welcome3, Welcome4, Welcome5, Login, Register, ForgotPassword } from './app/screens';


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        
        <Stack.Screen
          name="Welcome1"
          component={Welcome1}
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="Welcome2"
          component={Welcome2}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Welcome3"
          component={Welcome3}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Welcome4"
          component={Welcome4}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Welcome5"
          component={Welcome5}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false
          }}
        />  

      </Stack.Navigator>
    </NavigationContainer>
  );
}