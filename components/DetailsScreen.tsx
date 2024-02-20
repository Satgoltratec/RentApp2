import {Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {data, House} from './data';

function DetailsScreen() {
  const route = useRoute();

  const house = data.find(house => house.id === route.params.id);

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
