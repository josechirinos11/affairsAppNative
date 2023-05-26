import React from 'react';
import {View} from 'react-native';
import {Surface, Button, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

const Login = () => {
  return (
    <View>
      <Surface style={styles.surface}>
        <Text variant="headlineMedium">AffairsApp</Text>
      </Surface>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    backgroundColor: '#EDBB99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
