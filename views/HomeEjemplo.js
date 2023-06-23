import React, { useEffect, useContext, useState, useRef, clearInterval  } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Animated 
} from 'react-native';
import {
  Card,
  Avatar,
  Surface,
  Modal,
  Portal,
  Text,
  TextInput,
  Button,
  useTheme,
  Searchbar,
} from 'react-native-paper';


import homeStyles from '../styles/homeStyles';
import FormLogin from './pages/FormLogin';
import PentagonLine from './componentsAccesoAPP/PentagonoLine';
import AccesoAPP from './pages/AccesoAPP';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from '../AppContext';
import lupa from '../img/lupa.png';

// apollo
import { gql, useMutation } from '@apollo/client';
const VALIDAD_TOKEN = gql`
  mutation ValidarToken($input: ValidarToken) {
    validarToken(input: $input) {
      status
      id
      correo
    }
  }
`;

const AUTENTICAR_USUARIO = gql`
  mutation AutenticarUsuario($input: AutenticarAccesoUsuario) {
    autenticarUsuario(input: $input) {
      token
    }
  }
`;

const image = require('../img/home/izquierda.jpg');
const logo = require('./img/');
const { width, height } = Dimensions.get('window');


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Home = () => {
  console.log('desde el home');




  const { appVariables, setAppVariables } = useContext(AppContext);
  const { VISTA } = appVariables;
  const [vista, setVista] = React.useState('entrar');
  const theme = useTheme();
  console.log(`VALOR DE VISTA:   ${VISTA}`);

  //mutation de apollo
  const [validarToken] = useMutation(VALIDAD_TOKEN);

  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

  const validarAuthentication = async () => {
    const TokenStorage = await AsyncStorage.getItem('token');
    console.log(`VALOR DE TOKEN:   ${TokenStorage}`);
    //guardar usuario
    try {
      const { data } = await validarToken({
        variables: {
          input: {
            token: TokenStorage,
          },
        },
      });

      //console.log(data);
      console.log(data.validarToken.correo);
      console.log(data.validarToken.id);

      setAppVariables({ ...appVariables, VISTA: 'entrar' });
      console.log(`este es el valos de VISTA ${VISTA}`);
      //setVisible(false);
      return validarToken.usuario;
    } catch (error) {
      console.log(error.message);
      setAppVariables({ ...appVariables, VISTA: 'login' });
      //setVisible(false);
    }
  };

  useEffect(() => {
    validarAuthentication();
  }, []);



  

// Referencia al componente ScrollView
const scrollViewRef = useRef(null);


// Función para desplazar automáticamente los cards hacia arriba
const scrollCards = () => {
 
  scrollViewRef.current.scrollTo({ x: 0, y: 400, animated: true });
};



// Desplazar automáticamente los cards después de 3 segundos
useEffect(() => {
  const interval = setInterval(() => {
    scrollCards();
  }, 1000);

  return () => clearInterval(interval);
}, []);







  const onChangeSearch = query => setSearchQuery(query);
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View style={homeStyles.containerPrincipal}>
      {VISTA === 'login' ? (
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={[homeStyles.image, { width: width, height: height }]}>
          <View style={homeStyles.containerSuperior}>
            <Image
              source={require('../img/iconovercion1.png')}
              style={homeStyles.icon}
            />
            <Text
              variant="displayLarge"
              style={[{ color: theme.colors.primary }, homeStyles.titulo]}>
              AffairsApp
            </Text>
          </View>

          <View style={homeStyles.cardContainer}>

          <Searchbar
      mode='bar'
      icon={() => <Image source={lupa} style={homeStyles.searchIcon} />}
      style={[homeStyles.containerSearchbar, {backgroundColor: theme.colors.primary}]}
      placeholder="Buscar Producto"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />



<ScrollView
              ref={scrollViewRef}
             
              showsVerticalScrollIndicator={false}
            >
              <View style={homeStyles.cardContainerUnitario}>
              <Card>
                <Card.Title title="Poducto" subtitle="Culumpios" left={LeftContent} />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
              </View>
              

              <View style={homeStyles.cardContainerUnitario}>
              <Card>
                <Card.Title title="Poducto" subtitle="Culumpios" left={LeftContent} />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
              </View>


              <View style={homeStyles.cardContainerUnitario}>
              <Card>
                <Card.Title title="Poducto" subtitle="Culumpios" left={LeftContent} />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
              </View>


              <View style={homeStyles.cardContainerUnitario}>
              <Card>
                <Card.Title title="Poducto" subtitle="Culumpios" left={LeftContent} />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
              </View>


              <View style={homeStyles.cardContainerUnitario}>
              <Card>
                <Card.Title title="Poducto" subtitle="Culumpios" left={LeftContent} />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
              </View>


              <View style={homeStyles.cardContainerUnitario}>
              <Card>
                <Card.Title title="Poducto" subtitle="Culumpios" left={LeftContent} />
                <Card.Content>
                  <Text variant="titleLarge">Card title</Text>
                  <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
              </View>
            </ScrollView>
          </View>

          <View style={{ flex: 1 }}>
            <FormLogin />
          </View>
        </ImageBackground>
      ) : VISTA === 'entrar' ? (
        <AccesoAPP />
      ) : null}
    </View>
  );
};

export default Home;
