import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {data, getHouses, House} from './data';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamsList, 'Home'>;

function Home({navigation}: HomeProps) {
  const onPressFunction = () => {
    Alert.alert('BOTON PULSADO');
  };
  // const [casas, setCasas] = useState<House[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   getHouses().then(d => {
  //     setLoading(false);
  //     setCasas(d);
  //   });
  // }, []);

  // return (
  //   <View>
  //     <Text>{JSON.stringify({casas, loading}, null, 2)}</Text>
  //   </View>
  // );

  // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            paddingHorizontal: 12,
            flexDirection: 'row',
            backgroundColor: '#fefefe',
            height: 50,
            alignItems: 'center',
          }}>
          {/* Barra de búsqueda */}
          <View style={{flexGrow: 1}}>
            <TextInput
              style={{
                height: 35,
                marginRight: 12,
                borderWidth: 1,
                backgroundColor: 'white',
                borderColor: '#e9e9e9',
                shadowColor: '#f6f6f6',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 4,
                padding: 5,
                borderRadius: 50,
              }}
              placeholder="¿Dónde quieres ir?"
            />
          </View>

          <View>
            <Pressable
              style={{
                width: 45,
                height: 45,
                borderRadius: 50, // Esto hace que el botón sea circular
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'grey',
                borderWidth: 1,
              }}>
              <Text>x</Text>
              <Text>Filtro</Text>
            </Pressable>
            {/* <Button title="FILTRO" /> */}
          </View>
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{
              backgroundColor: '#fcfcfc',
              height: 50,
              flexDirection: 'row',
            }}>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>Piscinas increíbles</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>Castillos</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>Islas</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>Casas domo</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>Desiertos</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>En el campo</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>A pie de playa</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>Cabañas</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>Artico</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>Cuevas</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>Camping</Text>
            </View>
            <View style={styles.item}>
              <Text>x</Text>
              <Text>Diseño</Text>
            </View>
          </ScrollView>
        </View>

        <View>
          <Button
            onPress={() => {
              getHouses().then(d => {
                console.log(data);
                console.log('datos recibidos');
              });
            }}
            title="pillar casas"
          />
        </View>

        <ScrollView style={styles.scrollViewContent}>
          {data.map(house => (
            <Pressable
              key={house.id}
              onPress={() =>
                navigation.navigate('DetailsScreen', {id: house.id})
              }>
              <View style={{padding: 10}}>
                <Image
                  source={{uri: house.imageUrl}}
                  style={{
                    height: 250,
                    borderRadius: 20,
                  }}
                />
                <View style={{padding: 7}}>
                  <Text style={{fontWeight: 'bold'}}>
                    {house.province}, {house.country}
                  </Text>
                  <Text>{house.owner}</Text>

                  <Text>{house.pricePerNight} € por noche</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable style={styles.buttonMap} onPress={onPressFunction}>
          <Text style={styles.textButton}>Mapa</Text>
        </Pressable>

        <View style={styles.bottomMenu}>
          {/* Barra Inferior */}

          <View style={styles.itemBotton}>
            <Text>x</Text>
            <Text>Explora</Text>
          </View>
          <View style={styles.itemBotton}>
            <Text>x</Text>
            <Text>Favoritos</Text>
          </View>
          <View style={styles.itemBotton}>
            <Text>x</Text>
            <Text>Viajes</Text>
          </View>
          <View style={styles.itemBotton}>
            <Text>x</Text>
            <Text>Mensajes</Text>
          </View>
          <View style={styles.itemBotton}>
            <Text>x</Text>
            <Text>Iniciar sesión</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    height: 50,
  },
  items: {
    flexDirection: 'row', // Items horizontalmente
    height: 50,
    backgroundColor: 'tomato',
    borderBottomColor: '#f9f9f9',
  },
  itemsBotton: {
    flexDirection: 'row', // Items horizontalmente
    height: 50,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  itemBotton: {
    borderTopColor: '#d7d7d7',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },

  scrollViewContent: {
    backgroundColor: '#ffffff',
  },
  bottomMenu: {
    backgroundColor: '#ffffff',
    height: 50,
    flexDirection: 'row',
  },
  buttonMap: {
    position: 'absolute',
    bottom: 74,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    elevation: 3,
    width: 120,
    left: '50%',
    marginLeft: -60,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 15,
    lineHeight: 21,
    paddingVertical: 12,
    fontWeight: 'bold',

    color: 'white',
  },
});

export default Home;
