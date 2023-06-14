import * as React from 'react';
import {Avatar} from 'react-native-paper';
import {Text, StyleSheet, useTheme} from 'react-native';

const MyAvatar = () => {
  return (
    <Avatar.Image
      size={30}
      source={require('../../img/usuario.png')}
      style={StyleSheet.container}
    />
  );
};

const menuSuperiorStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default MyAvatar;
