const windowDimensions = Dimensions.get('window');
import {StyleSheet, Dimensions} from 'react-native';
import css from './global';

const menuSuperiorStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerMenu: {
    paddingRight: 5,
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
  ejemplo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    marginTop: 0,
    paddingVertical: 0,

    backgroundColor: css.colors.onPrimary,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
