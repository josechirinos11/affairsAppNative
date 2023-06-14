import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  TextInput,
  Button,
  useTheme,
  Snackbar,
} from 'react-native-paper';
import MenuSuperior from '../components/MenuSuperior';
//import Menu from './components/menu';
import Menu from './componentsPages/Menu';

const Clientes = () => {
  console.log('desde cliente');
  return (
    <View style={{flex: 1}}>
      <MenuSuperior />
      <Menu style={{flex: 1, top: 0}} />
    </View>
  );
};

export default Clientes;
