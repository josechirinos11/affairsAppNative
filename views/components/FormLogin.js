import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  TextInput,
  Button,
  useTheme,
} from 'react-native-paper';
import homeStyles from '../../styles/homeStyles';

const FormLogin = () => {
  const [visible, setVisible] = React.useState(false);
  const theme = useTheme();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const [usuario, setUsuario] = React.useState('');
  const [password, setPasword] = React.useState('');

  return (
    <>
      <Portal>
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
            LOGIN
          </Text>
          <TextInput
            style={{backgroundColor: theme.colors.onPrimary}}
            mode="flat"
            label="USUARIO"
            value={usuario}
            onChangeText={usuario => setUsuario(usuario)}
          />
          <TextInput
            style={{backgroundColor: theme.colors.onPrimary}}
            label="PASSWORD"
            value={password}
            onChangeText={password => setPasword(password)}
          />
          <Button mode="contained" style={{marginTop: 30}} onPress={showModal}>
            GUARDAR
          </Button>
        </Modal>
      </Portal>

      <View style={homeStyles.buttonContainer}>
        <Button style={homeStyles.buton} mode="contained" onPress={showModal}>
          Entrar
        </Button>
        <Button style={homeStyles.buton} mode="contained" onPress={showModal}>
          Registrarse
        </Button>
      </View>
    </>
  );
};

export default FormLogin;
