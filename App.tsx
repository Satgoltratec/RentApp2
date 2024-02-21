/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import DetailsScreen from './components/DetailsScreen';
// import Prueba from './components/Prueba';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import {getHouses} from './components/data';

export type RootStackParamsList = {
  Home: undefined;
  DetailsScreen: {id: number};
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  // return <Prueba />;
  // return <Home />;
  // return <Details />;

  // const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{headerShown: false, title: 'Inicio'}}
    //     />
    //     <Stack.Screen
    //       name="DetailsScreen"
    //       component={DetailsScreen}
    //       options={{title: 'Detalles'}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
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
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
