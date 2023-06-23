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

const homeStyles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
  
    
    flex: 8,
    width: '50%',
    paddingLeft: 5,
    height: '100%',

  },
  cardContainerUnitario: {
    paddingBottom: 5,
    paddingTop: 5,
    
    

  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDialog: {
   top:200,
   textAlign: 'center',
   justifyContent: 'center',
      alignItems: 'center',
  },
  snackbarText: {
    textAlign: 'left',
  },
  
    containerSnackbar: {
      position: 'absolute',
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      textAlign: 'left',
    
  },
  containerSuperior: {
  
    flex: 1,
    
    justifyContent: 'flex-start',
    alignItems: 'center',
    height:'100%'
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
    
  
    
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    height:'100%',
   
  },
  buton: {
    flex: 1, // Distribuye el espacio disponible de manera igual entre los botones
    margin: 10, // Ajusta el margen entre los botones según tus necesidades
    

  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  containerSearchbar: {
    height: 40,
    marginBottom: 5,
    paddingTop: 0,
    marginTop: 0,
    
    
  },
});

export default homeStyles;
