import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
  Searchbar ,
  Portal,
  Text,
  TextInput,
  Button,
  useTheme,
  List,
} from 'react-native-paper';
import MenuSuperior from '../componentsAccesoAPP/MenuSuperior';
import Menu from './componentsPages/Menu';
import clienteStyles from '../../styles/clienteStyles';
import lupa from '../../img/lupa.png';
import cliente from '../../img/cliente.png'






const Clientes = () => {
  console.log('desde cliente');
  const [searchQuery, setSearchQuery] = React.useState('');
  const theme = useTheme();
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={clienteStyles.containercontainerPrincipal}>

      <MenuSuperior />
      <List.Item
    title="Nombre Cliente"
    description="Direccion / Telefonos"
    left={props => <List.Icon {...props}
     icon={() => <Image source={cliente} style={clienteStyles.searchIcon} />}
      />}
  />
      <Searchbar
      mode='bar'
      icon={() => <Image source={lupa} style={clienteStyles.searchIcon} />}
      style={[clienteStyles.containerSearchbar, {backgroundColor: theme.colors.primary}]}
      placeholder="Buscar Cliente"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      
      
    </View>
  );
};

export default Clientes;
