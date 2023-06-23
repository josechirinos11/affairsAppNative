const windowDimensions = Dimensions.get('window');
import {StyleSheet, Dimensions} from 'react-native';
import css from './global';

const menuSuperiorStyles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  containerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: windowDimensions.width,

    backgroundColor: css.colors.onPrimary,
    shadowColor: css.colors.primary,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    flex: 1, // Añadir flex: 1 para ocupar el espacio restante
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
    flex: 1, // Añadir flex: 1 para ocupar el espacio restante
    justifyContent: 'flex-end', // Alinear los elementos a la derecha
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Cambiar de 'flex-end' a 'flex-start' para alinear a la izquierda
    flex: 1, // Añadir flex: 1 para ocupar el espacio restante
  },

  titulo: {
    alignItems: 'center',
    paddingLeft: 5,
    fontSize: 20, // Tamaño de fuente inicial
    //minWidth: 20, // Ancho mínimo del texto
    //maxWidth: 200, // Ancho máximo del texto
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',

    //color: theme.colors.primary,
  },
  myAvatar: {
    borderWidth: 5,
    borderColor: css.colors.primary,
  },
});

export default menuSuperiorStyles;
