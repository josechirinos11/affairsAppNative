import * as React from 'react';
import {BottomNavigation, Text, Button, useTheme} from 'react-native-paper';
import {Image, View, Dimensions} from 'react-native';
import menuStyles from '../../styles/menuStyles';
import MenuSuperior from './MenuSuperior';
import homeStyles from '../../styles/homeStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Clientes from '../pages/Clientes';
import Productos from '../pages/Productos';
import Proveedores from '../pages/Proveedores';
import Empresas from '../pages/Empresas';

const {width, height} = Dimensions.get('window');
const ClientesIcon = () => (
  <Image source={require('../../img/cliente.png')} style={menuStyles.icon} />
);
const ClientesIconfocus = () => (
  <Image source={require('../../img/navegacion.png')} style={menuStyles.icon} />
);
//const ClientesRoute = () => <Clientes />;

const ProductosIcon = () => (
  <Image source={require('../../img//producto.png')} style={menuStyles.icon} />
);
const ProductosRoute = () => <Text>Productos</Text>;

const ProveedoresIcon = () => (
  <Image source={require('../../img/proveedor.png')} style={menuStyles.icon} />
);
const ProveedoresRoute = () => <Proveedores />;

const EmpresasIcon = () => (
  <Image source={require('../../img/empresa.png')} style={menuStyles.icon} />
);
const EmpresasRoute = () => <Text>Empresas</Text>;

const Menus = ({setVista}) => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'clientes',
      title: 'Clientes',
      unfocusedIcon: ClientesIcon,
      focusedIcon: ClientesIconfocus,
    },
    {
      key: 'productos',
      title: 'Productos',
      unfocusedIcon: ProductosIcon,
      focusedIcon: ClientesIconfocus,
    },
    {
      key: 'proveedores',
      title: 'Proveedores',
      unfocusedIcon: ProveedoresIcon,
      focusedIcon: ClientesIconfocus,
    },
    {
      key: 'empresas',
      title: 'Empresas',
      unfocusedIcon: EmpresasIcon,
      focusedIcon: ClientesIconfocus,
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    clientes: Clientes,
    productos: Productos,
    proveedores: Proveedores,
    empresas: Empresas,
  });

  const iratras = () => {
    setVista('login');
  };

  const buscarToken = () => {
    console.log(AsyncStorage);
    AsyncStorage.setItem('token', 'soy el token carajo');
    // AsyncStorage.removeItem('token');
  };

  return (
    <View style={menuStyles.container}>
      <View style={menuStyles.bottomNavigationContainer}>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={{backgroundColor: theme.colors.primary}}
          style={{width, height}}
        />
      </View>
    </View>
  );
};

export default Menus;
