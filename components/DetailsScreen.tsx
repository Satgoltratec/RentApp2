import {Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {getHouses, House} from './data';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../App';

type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'DetailsScreen'
>;

// type ScreenRouteProp = RouteProp<DetailsScreenProps>

// type ScreenNavigationProp = NavigationProp<DetailsScreenProps>

function DetailsScreen({navigation, route}: DetailsScreenProps) {
  // navigation.navigate('Home');
  const {data} = useQuery({queryKey: ['houses'], queryFn: getHouses});

  const house = data && data.find(house => house.id === route.params.id);

  // if (!house) {
  //   return <Text>Casa no encontrada</Text>;
  // }

  // return <Text>{JSON.stringify(data, null, 2)}</Text>;

  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={{uri: house.imageUrl}}
        style={{
          height: 250,
        }}
      />
      <ScrollView>
        <View style={{padding: 7, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Afitrion: </Text>
          <Text>{house.owner}</Text>
        </View>
        <View style={{padding: 5, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>{house.pricePerNight}€ noche</Text>
        </View>
        <View>
          <Text style={{padding: 5}}>Ubicado en {house.province} </Text>
        </View>
        <View
          style={{
            padding: 10,
            justifyContent: 'center',
            borderTopWidth: 0.2,
            borderColor: 'grey',
          }}>
          <Text>{house.description}</Text>
        </View>
      </ScrollView>
      {/* <Text>Pantalla de detalles</Text>
      <Text>{JSON.stringify(house, null, 2)}</Text> */}
    </SafeAreaView>
  );
}

export default DetailsScreen;
