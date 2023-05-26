import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

import css from './styles/global';
const theme = {
  ...DefaultTheme,
  colors: css.colors, // Copy it from the color codes scheme and then use it here
};
const Stack = createStackNavigator();

import Login from './views/Login';
import CrearCuenta from './views/CrearCuenta';
import Home from './views/Home'





const App  = () => {
  return (
    <>
      <PaperProvider theme={theme}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  title: "Home",
                  headerShown: false
                }}
              />
          
                <Stack.Screen
                name="CrearCuenta"
                component={CrearCuenta}
                options={{
                  headerShown: false,
                  title: "Crear Cuenta", 
                  headerStyle: {
                    backgroundColor: '#d6dde7'
                  }, 
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold'
                  }
                }}
                

              />

          </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
