import React, {useEffect, useContext} from 'react';
import {View, Image} from 'react-native';
import {
  Button,
  Menu,
  Divider,
  PaperProvider,
  IconButton,
  useTheme,
  MD3Colors,
} from 'react-native-paper';
import AppContext from '../../AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MenuDespleglabeAvatar = ({setVista}) => {
  const {appVariables, setAppVariables} = useContext(AppContext);
  const {VISTA} = setAppVariables;

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const theme = useTheme();

  const salir = async () => {

    console.log('salir');
    const salida = ""
    
    setAppVariables({...appVariables, VISTA: 'login'});
    await AsyncStorage.setItem('token', salida);
 
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Menu
          style={{
            position: 'absolute',
          }}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon={() => (
                <Image
                  source={require('../../img/usuario.png')}
                  style={{width: 24, height: 24}}
                />
              )}
              iconColor={MD3Colors.error50}
              color={theme.colors.primary}
              size={24}
              onPress={openMenu}></IconButton>
          }>
          <Menu.Item onPress={() => {}} title="Ajustes" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Suscripcion" />
          <Divider />
          <Menu.Item onPress={salir} title="Salir" />
        </Menu>
      </View>
    </>
  );
};

export default MenuDespleglabeAvatar;
