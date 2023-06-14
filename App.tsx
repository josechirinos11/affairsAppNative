import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import MenuSuperior from './views/components/MenuSuperior';
import css from './styles/global';
import AppContext from './AppContext';

import CrearCuenta from './views/CrearCuenta';
import Home from './views/Home';
import variables from './variables';

const theme = {
  ...DefaultTheme,
  colors: css.colors,
};

const Stack = createStackNavigator();

const App = () => {
  const [appVariables, setAppVariables] = useState(variables.VISTA);

  return (
    <AppContext.Provider value={{ appVariables, setAppVariables }}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta"
              component={CrearCuenta}
              options={{
                headerShown: false,
                title: 'Crear Cuenta',
                headerStyle: {
                  backgroundColor: '#d6dde7',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
};

export default App;
