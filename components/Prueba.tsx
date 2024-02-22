import {Image, ScrollView, Text, View} from 'react-native';

export default function Prueba() {
  return (
    <ScrollView contentContainerStyle={{flex: 1, padding: 10}}>
      <Text>Prueba</Text>
      <Text>Prueba</Text>
      <Text>Prueba</Text>
      <Text>Prueba</Text>
      <Text>Prueba</Text>
      <Text>Prueba</Text>
      <Text>Prueba</Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={{
          width: 500,
          height: 250,
        }}
      />

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={{
          height: 250,
        }}
      />
    </ScrollView>
  );
}
