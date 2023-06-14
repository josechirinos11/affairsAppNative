import React, {useContext} from 'react';
import {Text} from 'react-native';
import AppContext from './AppContext';

const MiComponente = () => {
  const {config} = useContext(AppContext);

  return <Text>{config.CONFIG_VARIABLE_1}</Text>;
};

export default MiComponente;
