import * as React from 'react';
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

const Menudesplegable = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const theme = useTheme();
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
                  source={require('../../img/3rayas.png')}
                  style={{width: 24, height: 24}}
                />
              )}
              iconColor={MD3Colors.error50}
              color={theme.colors.primary}
              size={24}
              onPress={openMenu}></IconButton>
          }>
          <Menu.Item onPress={() => {}} title="Administracion" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Empleados" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Servicios" />
        </Menu>
      </View>
    </>
  );
};

export default Menudesplegable;
