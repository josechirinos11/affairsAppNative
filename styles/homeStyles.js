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
  pentagono: {
    position: 'absolute',
    top: 120, // Ajusta la posición vertical según tus necesidades
    left: 50, // Ajusta la posición horizontal según tus necesidades
  },
  icon: {
    position: 'absolute',
    top: 20, // Ajusta la posición vertical según tus necesidades
    left: 10, // Ajusta la posición horizontal según tus necesidades
    width: 24,
    height: 24,
  },
  titulo: {
    position: 'absolute',
    top: 0, // Ajusta la posición vertical según tus necesidades
    left: 35, // Ajusta la posición horizontal según tus necesidades
    fontSize: 25, // Tamaño de fuente inicial
    minWidth: 20, // Ancho mínimo del texto
    maxWidth: 200, // Ancho máximo del texto
    fontStyle: 'normal',
    fontWeight: 'bold',

    //color: theme.colors.primary,
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

  text: {
    color: 'rgb(222, 111, 47)',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10, // Ajusta el espacio horizontal entre los botones según tus necesidades
    paddingBottom: 20, // Ajusta el espacio inferior entre los botones según tus necesidades
  },
  buton: {
    flex: 1, // Distribuye el espacio disponible de manera igual entre los botones
    margin: 5, // Ajusta el margen entre los botones según tus necesidades
  },
});

export default homeStyles;
