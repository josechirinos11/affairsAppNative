import {StyleSheet, Dimensions} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  TextInput,
  Button,
  useTheme,
} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const clienteStyles = StyleSheet.create({

  containercontainerPrincipal: {
    flex: 1,
   
   
  },
  containerSearchbar: {
    height: 50,
    marginBottom: 5,
    marginLeft: 10,
marginRight: 10,
    
  },
  containerMenuSuperior: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },

});

export default clienteStyles;
