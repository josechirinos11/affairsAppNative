import React, {useState, useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {
  Surface,
  Dialog,
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
import MensajeBaner from '../componentsAccesoAPP/MensajeBaner';
import AppContext from '../../AppContext';
import Mensaje from './componentsPages/Mensaje'

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

const VALIDAR_CORREO = gql`
  mutation ValidarCorreo($input: RecuperarPassword) {
    validarCorreo(input: $input) {
      codigoRecuperacion
      fechaExpiracion
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

const FormLogin = () => {
  const {appVariables, setAppVariables} = useContext(AppContext);
  const {VISTA} = setAppVariables;
  // state del formulario
  const [entrar_Registrar, setentrar_Registrar] = React.useState('');
  const [verificacionCodigo, setVerificacionCodigo] = React.useState('');
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const [usuario, setUsuario] = React.useState('');
  const [codigo, setCodigo] = React.useState('');
  const [usuarioEntrar, setUsuarioEntrar] = React.useState('');
  const [usuarioRegistrar, setUsuarioRegistrar] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [visibleMensaje, setVisibleMensaje] = useState(false);
  const [textoMensaje, setTextoMensaje] = useState('');
  const [codigoGenerado, setCodigoGenerado] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');

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
    setVerificacionCodigo('registrar');

    setVisible(true);
  };
  // React Navigator
  const navigation = useNavigation();
  //mutation de apollo
  const [nuevoUsuario] = useMutation(NUEVO_USUARIO);
  const [autenticarUsuario] = useMutation(AUTHENTICAR_USUARIO);
  const [validarCorreo] = useMutation(VALIDAR_CORREO);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // boton de logearse
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

      const TokenStorage = await AsyncStorage.getItem('token');
      console.log(TokenStorage);

      setAppVariables({...appVariables, VISTA: 'entrar'});

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
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const registrarUsuario = async () => {
    const fechaActual = new Date();
    const fechaExpiracionDate = new Date(fechaExpiracion);

    // validar
    if (fechaExpiracionDate < fechaActual) {
      showMessage('El codigo a expirado, valido maximo 3 Horas');
      console.log('El codigo a expirado, valido maximo 3 Horas');
      return;
    } else {
      console.log(fechaExpiracionDate);
      console.log(fechaActual);
      if (codigo === codigoGenerado) {
        // La fecha de expiración aún no ha pasado
        console.log('La fecha de expiración aún no ha expirado.');
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

          setAppVariables({...appVariables, VISTA: 'entrar'});
          //setVisible(false);
          return data.usuario;
        } catch (error) {
          showMessage(error.message);
          console.log(error.message);
          //setVisible(false);
        }
      }
    }
  };

  const verificacionUsuario = async () => {
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
    //enviar codigo de validacion del correo
    try {
      const {data} = await validarCorreo({
        variables: {
          input: {
            correo: usuario,
          },
        },
      });

      //console.log('Se requiere validacion de correo');
      //console.log(data);
      console.log(data.validarCorreo.codigoRecuperacion);
      console.log(data.validarCorreo.fechaExpiracion);
      setCodigoGenerado(data.validarCorreo.codigoRecuperacion);
      setFechaExpiracion(data.validarCorreo.fechaExpiracion);
      console.log(codigoGenerado);
      console.log(fechaExpiracion);
      //showMessage('Se requiere validacion de correo');
      setVerificacionCodigo('enEspera');
      //setVisible(false);
      return data.ValidarCorreo;
    } catch (error) {
      showMessage(error.message);
      console.log(error.message);
      //setVisible(false);
    }
  };
  return (
    <>
      <Portal>
        {entrar_Registrar === 'entrar' && (
          <Modal
            style={homeStyles.containerModal}
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text style={{textAlign: 'center', color: theme.colors.primary}}>
              LOGIN
            </Text>
            <TextInput
              style={{backgroundColor: theme.colors.onPrimary}}
              mode="flat"
              label="Correo"
              value={usuario}
              onChangeText={setUsuario}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={{backgroundColor: theme.colors.onPrimary}}
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry 
            />

            <Button
             textColor="white"
             mode="elevated"
             style={{marginTop: 30}}
              onPress={login}>
              ACEPTAR
            </Button>

            <Mensaje
             visible={visibleMensaje}
             onDismiss={hideMessage}
             textoMensaje={textoMensaje}
             theme={theme}
            />

          </Modal>
        )}
        {entrar_Registrar === 'registrar' &&
          verificacionCodigo === 'registrar' && (
            <Modal
              style={homeStyles.containerModal}
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}>
              <Text style={{textAlign: 'center', color: theme.colors.primary}}>
                REGISTRARSE
              </Text>
              <Mensaje
             visible={visibleMensaje}
             onDismiss={hideMessage}
             textoMensaje={textoMensaje}
             theme={theme}
            />
              <TextInput
                
                style={{backgroundColor: theme.colors.onPrimary}}
                mode="flat"
                label="Correo"
                value={usuario}
                onChangeText={setUsuario}
                keyboardType="email-address"
              autoCapitalize="none"
              />
              <TextInput
                style={{backgroundColor: theme.colors.onPrimary}}
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry 
              />

              <Button
                textColor="white"
                mode="elevated"
                style={{marginTop: 30}}
                onPress={verificacionUsuario}>
                ACEPTAR
              </Button>
              <Mensaje
             visible={visibleMensaje}
             onDismiss={hideMessage}
             textoMensaje={textoMensaje}
             theme={theme}
            />
            </Modal>
          )}
        {entrar_Registrar === 'registrar' &&
          verificacionCodigo === 'enEspera' && (
            <Modal
              style={homeStyles.containerModal}
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}>
              <Text style={{textAlign: 'center', color: theme.colors.primary}}>
                Verificacion de Email,
              </Text>
              <Mensaje
             visible={visibleMensaje}
             onDismiss={hideMessage}
             textoMensaje={textoMensaje}
             theme={theme}
            />
              <TextInput
                style={{backgroundColor: theme.colors.onPrimary}}
                mode="flat"
                label="Escribe el codigo enviado"
                value={codigo}
                onChangeText={setCodigo}
                keyboardType="numeric"
              autoCapitalize="none"
              />

              <Button
                mode="contained"
                style={{marginTop: 30}}
                onPress={registrarUsuario}>
                Verificar
              </Button>
              <Mensaje
             visible={visibleMensaje}
             onDismiss={hideMessage}
             textoMensaje={textoMensaje}
             theme={theme}
            />
            </Modal>
          )}
      </Portal>

    




      <View style={homeStyles.buttonContainer}>


    


   
        <Button
          textColor="white"
          mode="elevated"
          style={homeStyles.buton}
          
          onPress={showModalEntrar}>
          Entrar
        </Button>
    
        <Button
          style={homeStyles.buton}
          textColor="white"
          mode="elevated"
          onPress={showModalRegistrar}>
          Registrarse
        </Button>
      </View>
    </>
  );
};

export default FormLogin;
