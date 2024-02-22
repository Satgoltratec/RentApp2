import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {useQuery} from '@tanstack/react-query';
import {getOneHouse, House} from './data';
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
  const {data, isLoading, isLoadingError, isFetching} = useQuery({
    queryKey: ['house'],
    queryFn: () => getOneHouse(route.params.id),
  });

  // const house = data && data.find(house => house.id === route.params.id);

  const house = data;

  if (!house || isLoading === true || isFetching === true) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    // <View>
    //   <Text>{JSON.stringify(data, null, 2)}</Text>
    // </View>
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
    </SafeAreaView>
  );
}

export default DetailsScreen;
