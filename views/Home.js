import * as React from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
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

const image = require('../img/logo.png');
const {width, height} = Dimensions.get('window');

console.log(width);
console.log(height);
const Home = () => {
  return (
    <View style={homeStyles.containerPrincipal}>
      <ImageBackground
        source={image}
        resizeMode="contain"
        style={[homeStyles.image, {width: width, height: height}]}>
        <FormLogin />
      </ImageBackground>
    </View>
  );
};

export default Home;
