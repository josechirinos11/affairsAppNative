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
import Menu3rayas from './Menu3rayas';
import MenuDespleglabeAvatar from './MenuDespleglabeAvatar';

const MenuSuperior = () => {
  const theme = useTheme();
  return (
    <PaperProvider>
      <View style={menuSuperiorStyles.containerMenu}>
        <View style={menuSuperiorStyles.leftContainer}>
          <Menu3rayas />
          
        </View>
        <View style={menuSuperiorStyles.centerContainer}>
          <Image
            source={require('../../img/iconovercion1.png')}
            style={menuSuperiorStyles.icon}
          />
          <Text
            variant="displayLarge"
            style={[{color: theme.colors.primary}, menuSuperiorStyles.titulo]}>
            AffairsApp
          </Text>
        </View>

        
        <View style={menuSuperiorStyles.rightContainer}>
          
          <MenuDespleglabeAvatar />
        </View>
      </View>
    </PaperProvider>
  );
};

export default MenuSuperior;
