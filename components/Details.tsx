import {Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

function Details() {
  const route = useRoute();

  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={{uri: route.params.image}}
        style={{
          height: 250,
        }}
      />
      <ScrollView>
        <View style={{padding: 7, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Afitrion: </Text>
          <Text>{route.params.owner}</Text>
        </View>
        <View style={{padding: 5, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>
            {route.params.pricePerNight}€ noche
          </Text>
        </View>
        <View>
          <Text style={{padding: 5}}>Ubicado en {route.params.province} </Text>
        </View>
        <View
          style={{padding: 10, justifyContent: 'center', borderTopWidth: 0.3}}>
          <Text>{route.params.description}</Text>
        </View>
      </ScrollView>
      {/* <Text>Pantalla de detalles</Text>
      <Text>{JSON.stringify(route.params, null, 2)}</Text> */}
    </SafeAreaView>
  );
}

export default Details;
