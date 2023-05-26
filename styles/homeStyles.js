import {StyleSheet} from 'react-native';
import {
  Modal,
  Portal,
  Text,
  TextInput,
  Button,
  useTheme,
} from 'react-native-paper';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerPrincipal: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  containerModal: {
    padding: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  image: {
    flex: 1,
  },

  buton: {
    width: '100%',
    margin: 5,
  },
  text: {
    color: 'rgb(222, 111, 47)',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 200,
  },
});

export default homeStyles;
