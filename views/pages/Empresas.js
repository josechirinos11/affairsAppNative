import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MenuSuperior from '../components/MenuSuperior';

const Empresas = () => {
  console.log('desde Empresas');
  return (
    <View style={{flex: 1}}>
      <MenuSuperior />
      <Text
        style={{
          alignItems: 'center',
          paddingLeft: 5,
          fontSize: 20, // Tamaño de fuente inicial
          //minWidth: 20, // Ancho mínimo del texto
          //maxWidth: 200, // Ancho máximo del texto
          fontStyle: 'normal',
          fontWeight: 'bold',
          textAlign: 'center',

          //color: theme.colors.primary,
        }}>
        Empresas
      </Text>
    </View>
  );
};

export default Empresas;
