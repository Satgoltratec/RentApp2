import React from 'react';
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

import {data, House} from './data';

function Container() {
  const onPressFunction = () => {
    Alert.alert('BOTON PULSADO');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        {/* Barra de búsqueda */}
        <TextInput
          style={{
            height: 35,
            width: 300,
            margin: 12,
            borderWidth: 1,
            padding: 5,
            borderRadius: 10,
          }}
          placeholder="Busqueda"
        />
        <Button title="FILTRO" />
      </View>
      <View style={{height: 50}}>
        <ScrollView horizontal={true} style={styles.scrollViewCategory}>
          <View style={styles.items}>
            <Text style={styles.item}>ScrollItem 1</Text>
            <Text style={styles.item}>ScrollItem 2</Text>
            <Text style={styles.item}>ScrollItem 3</Text>
            <Text style={styles.item}>ScrollItem 4</Text>
            <Text style={styles.item}>ScrollItem 5</Text>
            <Text style={styles.item}>ScrollItem 6</Text>
            <Text style={styles.item}>ScrollItem 7</Text>
            <Text style={styles.item}>ScrollItem 8</Text>
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.scrollViewContent}>
        {data.map(house => (
          <View key={house.id} style={{padding: 10}}>
            <Image
              source={{uri: house.imageUrl}}
              style={{
                width: 370,
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
        ))}
      </ScrollView>
      <View style={styles.bottomMenu}>
        {/* Barra Inferior */}

        <Pressable style={styles.buttonMap} onPress={onPressFunction}>
          <Text style={styles.textButton}>BOTON</Text>
        </Pressable>
        <View style={styles.itemsBotton}>
          <Text style={styles.itemBotton}>Item 1</Text>
          <Text style={styles.itemBotton}>Item 2</Text>
          <Text style={styles.itemBotton}>Item 3</Text>
          <Text style={styles.itemBotton}>Item 4</Text>
          <Text style={styles.itemBotton}>Item 5</Text>
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
    backgroundColor: 'lightgrey',
    height: 50,
  },
  items: {
    flexDirection: 'row', // Items horizontalmente
    alignItems: 'center',
    height: 50,
  },
  itemsBotton: {
    flexDirection: 'row', // Items horizontalmente
    alignItems: 'center',
    height: 50,
  },
  item: {
    margin: 10,
  },
  itemBotton: {
    margin: 10,
  },

  scrollViewCategory: {
    backgroundColor: 'tomato',
    height: 23,
  },
  scrollViewContent: {
    backgroundColor: 'lightblue',
  },
  bottomMenu: {
    backgroundColor: 'lightgreen',
    height: 50,
  },
  buttonMap: {
    position: 'absolute',
    bottom: 80,
    left: 152,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    elevation: 3,
  },
  textButton: {
    fontSize: 15,
    lineHeight: 21,
    paddingVertical: 12,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Container;
