/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState} from 'react';
import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './components/DetailsScreen';
// import Prueba from './components/Prueba';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {LOPDScreen} from './components/LOPDScreen';
import {LoginScreen} from './components/LoginScreen';
import {RegisterScreen} from './components/RegisterScreen';

export type RootStackParamsList = {
  Home: undefined;
  DetailsScreen: {id: number};
  LOPDScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

// function suma<T, Z>(a: T, a: Z): T {
//   return a;
// }

// let res = suma(23, "77")

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  // return <Prueba />;
  // return <Home />;
  // return <Details />;

  // const Stack = createNativeStackNavigator();

  const [signedIn, setSignedIn] = useState<boolean>(true);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          {signedIn ? (
            <>
              <RootStack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false, title: 'Inicio'}}
              />
              <RootStack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
                options={{title: 'Detalles'}}
              />
            </>
          ) : (
            <>
              <RootStack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{title: 'Login'}}
              />

              <RootStack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{title: 'Registro'}}
              />
            </>
          )}
          <RootStack.Group screenOptions={{presentation: 'modal'}}>
            <RootStack.Screen
              name="LOPDScreen"
              component={LOPDScreen}
              options={{title: 'Politica Protección de Datos'}}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
