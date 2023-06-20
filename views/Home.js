import React, {useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
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
import AppContext from '../AppContext';

// apollo
import {gql, useMutation} from '@apollo/client';
const VALIDAD_TOKEN = gql`
  mutation ValidarToken($input: ValidarToken) {
    validarToken(input: $input) {
      status
      id
      correo
    }
  }
`;

const AUTENTICAR_USUARIO = gql`
  mutation AutenticarUsuario($input: AutenticarAccesoUsuario) {
    autenticarUsuario(input: $input) {
      token
    }
  }
`;

const image = require('../img/home/izquierda.jpg');
const logo = require('./img/');
const {width, height} = Dimensions.get('window');

const Home = () => {
  console.log('desde el home');

  const {appVariables, setAppVariables} = useContext(AppContext);
  const {VISTA} = appVariables;
  const [vista, setVista] = React.useState('entrar');
  const theme = useTheme();
  console.log(`VALOR DE VISTA:   ${VISTA}`);

  //mutation de apollo
  const [validarToken] = useMutation(VALIDAD_TOKEN);

  const validarAuthentication = async () => {
    const TokenStorage = await AsyncStorage.getItem('token');
    console.log(`VALOR DE TOKEN:   ${TokenStorage}`);
    //guardar usuario
    try {
      const {data} = await validarToken({
        variables: {
          input: {
            token: TokenStorage,
          },
        },
      });

      //console.log(data);
      console.log(data.validarToken.correo);
      console.log(data.validarToken.id);

      setAppVariables({...appVariables, VISTA: 'entrar'});
      console.log(`este es el valos de VISTA ${VISTA}`);
      //setVisible(false);
      return validarToken.usuario;
    } catch (error) {
      console.log(error.message);
      setAppVariables({...appVariables, VISTA: 'login'});
      //setVisible(false);
    }
  };

  useEffect(() => {
    validarAuthentication();
  }, []);

  return (
    <View
      style={[homeStyles.containerPrincipal, {width: width, height: height}]}>
      {VISTA === 'login' ? (
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={[homeStyles.image, {width: width, height: height}]}>
          <View style={homeStyles.container}>
            <Image
              source={require('../img/iconovercion4.png')}
              style={homeStyles.icon}
            />
            <Text
              variant="displayLarge"
              style={[{color: theme.colors.primary}, homeStyles.titulo]}>
              AffairsApp
            </Text>
          </View>

          <FormLogin />
        </ImageBackground>
      ) : VISTA === 'entrar' ? (
        <Menus />
      ) : null}
    </View>
  );
};

export default Home;
