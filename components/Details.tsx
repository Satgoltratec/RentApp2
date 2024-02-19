import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

function Details() {
  const route = useRoute();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pantalla de detalles</Text>
      <Text>{JSON.stringify(route.params, null, 2)}</Text>
    </View>
  );
}

export default Details;
