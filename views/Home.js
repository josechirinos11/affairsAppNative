import * as React from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  TextInput,
  Button,
  useTheme,
} from 'react-native-paper';
import homeStyles from '../styles/homeStyles';
import FormLogin from './components/FormLogin';
import PentagonLine from './components/PentagonoLine';
import Menus from './components/Menus';
import AsyncStorage from '@react-native-async-storage/async-storage';
// apollo
import {gql, useMutation} from '@apollo/client';
const VALIDAD_TOKEN = gql`
  mutation Mutation($input: ValidarToken) {
    validarToken(input: $input)
  }
`;

const image = require('../img/logotech4.jpg');
const logo = require('./img/');
const {width, height} = Dimensions.get('window');

const Home = () => {
  console.log('desde el home');

  const [vista, setVista] = React.useState('login');
  const theme = useTheme();
  return (
    <View style={homeStyles.containerPrincipal}>
      {vista === 'login' ? (
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={[homeStyles.image, {width: width, height: height}]}>
          <Text
            variant="displayLarge"
            style={[{color: theme.colors.primary}, homeStyles.titulo]}>
            AffairsApp
          </Text>

          <FormLogin setVista={setVista} />
        </ImageBackground>
      ) : vista === 'entrar' ? (
        <Menus setVista={setVista} />
      ) : null}
    </View>
  );
};

export default Home;
