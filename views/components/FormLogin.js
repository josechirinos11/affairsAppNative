import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  TextInput,
  Button,
  useTheme,
  Snackbar,
} from 'react-native-paper';
import homeStyles from '../../styles/homeStyles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MensajeBaner from './MensajeBaner';

// apollo
import {gql, useMutation} from '@apollo/client';

const NUEVO_USUARIO = gql`
  mutation NuevoUsuario($input: UsuarioInput) {
    nuevoUsuario(input: $input) {
      id
      correo
    }
  }
`;

const AUTHENTICAR_USUARIO = gql`
  mutation AutenticarUsuario($input: AutenticarAccesoUsuario) {
    autenticarUsuario(input: $input) {
      token
    }
  }
`;

const FormLogin = ({setVista}) => {
  // state del formulario
  const [entrar_Registrar, setentrar_Registrar] = React.useState('');
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const [usuario, setUsuario] = React.useState('');
  const [usuarioEntrar, setUsuarioEntrar] = React.useState('');
  const [usuarioRegistrar, setUsuarioRegistrar] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [visibleMensaje, setVisibleMensaje] = useState(false);
  const [textoMensaje, setTextoMensaje] = useState('');

  const theme = useTheme();

  // mostrar el model de crear o registrar
  const showModalEntrar = () => {
    console.log('desde login');
    setUsuario('');
    setPassword('');
    setRepassword('');
    setentrar_Registrar('entrar');
    setVisible(true);
  };
  const showModalRegistrar = () => {
    console.log('desde registro');
    setUsuario('');
    setPassword('');
    setRepassword('');
    setentrar_Registrar('registrar');
    setVisible(true);
  };
  // React Navigator
  const navigation = useNavigation();
  //mutation de apollo
  const [nuevoUsuario] = useMutation(NUEVO_USUARIO);
  const [autenticarUsuario] = useMutation(AUTHENTICAR_USUARIO);
  // boton de crear cuenta
  const login = async () => {
    // validar
    if (usuario === '' || password === '') {
      showMessage('todos los campos son obligatorios');
      console.log('todos los campos son obligatorios');
      return;
    }
    //Password de al menos 8 caracteres
    if (password.length < 3) {
      showMessage('Minimo 8 caracteres en el password');
      console.log('todos los campos son obligatorios');
      return;
    }
    //gauthenticar usuario
    try {
      const {data} = await autenticarUsuario({
        variables: {
          input: {
            correo: usuario,
            password,
          },
        },
      });

      console.log('se a logeado');
      //console.log(data.autenticarUsuario.token);
      showMessage('se a logeado');
      await AsyncStorage.setItem('token', data.autenticarUsuario.token);
      setVista('entrar');

      //setVisible(false);
      return data.autenticarUsuario.token;
    } catch (error) {
      showMessage(error.message);
      console.log(error.message);
      //setVisible(false);
    }

    // setVisible(true);
  };

  const showMessage = mensaje => {
    setTextoMensaje(mensaje);
    setVisibleMensaje(true);
  };

  const hideMessage = () => {
    setVisibleMensaje(false);
  };

  const registrarUsuario = async () => {
    // validar
    if (usuario === '' || password === '') {
      showMessage('todos los campos son obligatorios');
      console.log('todos los campos son obligatorios');
      return;
    }
    //Password de al menos 8 caracteres
    if (password.length < 3) {
      showMessage('Minimo 8 caracteres en el password');

      console.log('todos los campos son obligatorios');
      return;
    }
    //guardar usuario
    try {
      const {data} = await nuevoUsuario({
        variables: {
          input: {
            correo: usuario,
            password,
          },
        },
      });

      console.log('se a registrado');
      //console.log(data);
      console.log(data.nuevoUsuario.correo);
      console.log(data.nuevoUsuario.id);
      showMessage('Se a registrado exitosamente');
      setVista('entrar');
      //setVisible(false);
      return data.usuario;
    } catch (error) {
      showMessage(error.message);
      console.log(error.message);
      //setVisible(false);
    }
  };

  return (
    <>
      <Portal>
        {entrar_Registrar === 'entrar' ? (
          <Modal
            style={homeStyles.containerModal}
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text
              style={{
                textAlign: 'center',
                color: theme.colors.primary,
              }}>
              Ingrese sus datos
            </Text>
            <TextInput
              style={{backgroundColor: theme.colors.onPrimary}}
              mode="flat"
              label="Correo"
              value={usuario}
              onChangeText={usuario => setUsuario(usuario)}
            />
            <TextInput
              style={{backgroundColor: theme.colors.onPrimary}}
              label="Password"
              value={password}
              onChangeText={password => setPassword(password)}
            />

            <Button mode="contained" style={{marginTop: 30}} onPress={login}>
              ACEPTAR
            </Button>
            <Snackbar
              style={{position: 'absolute', top: 0, alignSelf: 'center'}}
              visible={visibleMensaje}
              onDismiss={hideMessage}
              duration={5000} // Duración en milisegundos que se mostrará el mensaje
              action={{
                label: textoMensaje,
                onPress: hideMessage,
              }}></Snackbar>
          </Modal>
        ) : entrar_Registrar === 'registrar' ? (
          <Modal
            style={homeStyles.containerModal}
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text
              style={{
                textAlign: 'center',
                color: theme.colors.primary,
              }}>
              Registrarse
            </Text>
            <Snackbar
              style={{position: 'absolute', top: 0, alignSelf: 'center'}}
              visible={visibleMensaje}
              onDismiss={hideMessage}
              duration={5000} // Duración en milisegundos que se mostrará el mensaje
              action={{
                label: textoMensaje,
                onPress: hideMessage,
              }}></Snackbar>
            <TextInput
              style={{backgroundColor: theme.colors.onPrimary}}
              mode="flat"
              label="Correo"
              value={usuario}
              onChangeText={usuario => setUsuario(usuario)}
            />
            <TextInput
              style={{backgroundColor: theme.colors.onPrimary}}
              label="Password"
              value={password}
              onChangeText={password => setPassword(password)}
            />

            <Button
              mode="contained"
              style={{marginTop: 30}}
              onPress={registrarUsuario}>
              ACEPTAR
            </Button>
            <Snackbar
              style={{position: 'absolute', top: 0, alignSelf: 'center'}}
              visible={visibleMensaje}
              onDismiss={hideMessage}
              duration={5000} // Duración en milisegundos que se mostrará el mensaje
              action={{
                label: textoMensaje,
                onPress: hideMessage,
              }}></Snackbar>
          </Modal>
        ) : null}
      </Portal>

      <View style={homeStyles.buttonContainer}>
        <Button
          style={homeStyles.buton}
          mode="contained"
          onPress={showModalEntrar}>
          Entrar
        </Button>
        <Button
          style={homeStyles.buton}
          mode="contained"
          onPress={showModalRegistrar}>
          Registrarse
        </Button>
      </View>
    </>
  );
};

export default FormLogin;
