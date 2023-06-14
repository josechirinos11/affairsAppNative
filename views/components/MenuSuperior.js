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
import Menudesplegable from './Menudesplegable';
import MenuDespleglabeAvatar from './MenuDespleglabeAvatar';

const MenuSuperior = () => {
  const theme = useTheme();
  return (
    <PaperProvider>
      <View style={menuSuperiorStyles.containerMenu}>
        <View style={menuSuperiorStyles.leftContainer}>
          <Image
            source={require('../../img/iconovercion4.png')}
            style={menuSuperiorStyles.icon}
          />
          <Text
            variant="displayLarge"
            style={[{color: theme.colors.primary}, menuSuperiorStyles.titulo]}>
            AffairsApp
          </Text>
        </View>

        <View style={menuSuperiorStyles.rightContainer}>
          <Menudesplegable />
          <MenuDespleglabeAvatar />
        </View>
      </View>
    </PaperProvider>
  );
};

export default MenuSuperior;
