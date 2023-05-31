import * as React from 'react';
import {View, Dimensions, Image} from 'react-native';
import {
  Button,
  Menu,
  Divider,
  PaperProvider,
  Text,
  useTheme,
  IconButton,
  MD3Colors,
} from 'react-native-paper';
import menuSuperiorStyles from '../../styles/menuSuperiorStyles';
import homeStyles from '../../styles/homeStyles';
import MyAvatar from './MyAvatar';

const {width} = Dimensions.get('window');

const MenuSuperior = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const theme = useTheme();
  return (
    <PaperProvider>
      <View style={menuSuperiorStyles.container}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <View style={menuSuperiorStyles.containerMenu}>
              <Text
                variant="displayLarge"
                style={[
                  {color: theme.colors.primary},
                  menuSuperiorStyles.titulo,
                ]}>
                AffairsApp
              </Text>
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
                onPress={openMenu}
              />
              <MyAvatar style={menuSuperiorStyles.myAvatar} />
            </View>
          }>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MenuSuperior;
