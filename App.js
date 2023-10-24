import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as Welcomescreen from './app/screens/welcome/';
import * as AuthScreen from './app/screens/auth/';
import * as DashboardScreen from './app/screens/dashboard/';

// import { loadEnvVariables } from './app/config/env';

// // Load environment variables
// loadEnvVariables();

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        
        {/* <Stack.Screen
          name="Welcome1"
          component={Welcomescreen.Welcome1}
          options={{
            headerShown: false
          }}
        /> 
        
         <Stack.Screen
          name="Welcome2"
          component={Welcomescreen.Welcome2}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Welcome3"
          component={Welcomescreen.Welcome3}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Welcome4"
          component={Welcomescreen.Welcome4}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Welcome5"
          component={Welcomescreen.Welcome5}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Login"
          component={AuthScreen.Login}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Register"
          component={AuthScreen.Register}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={AuthScreen.ForgotPassword}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Success"
          component={AuthScreen.Success}
          options={{
            headerShown: false
          }}
        />  */} 

        <Stack.Screen
          name="Admin_RegsiterUser"
          component={DashboardScreen.Register}
          options={{
            headerShown: false
          }}
        />  

        {/* <Stack.Screen
           name="Admin_GetUsers"
           component={DashboardScreen.GetUsers}
           options={{
             headerShown: false
           }}
        />   */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}