import {ApolloClient, InMemoryCache} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setContext} from 'apollo-link-context';
import {createHttpLink} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://affairsappbackend-production.up.railway.app',
});

const authLink = setContext(async (_, {headers}) => {
  //leer token
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
export default client;

// http://localhost:4000   https://affairsappbackend-production.up.railway.app
/*






import {ApolloClient, InMemoryCache} from '@apollo/client';
import {AsyncStorage} from 'react-native';

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  uri: 'https://affairsappbackend-production.up.railway.app',
});
export default client;





*/
