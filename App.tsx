/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import DetailsScreen from './components/DetailsScreen';
// import Prueba from './components/Prueba';

export type RootStackParamsList = {
  Home: undefined;
  DetailsScreen: {id: number};
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

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
  );
}

export default App;
