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
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            paddingHorizontal: 12,
            flexDirection: 'row',
            backgroundColor: 'lightgrey',
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

                padding: 5,
                borderRadius: 10,
              }}
              placeholder="Busqueda"
            />
          </View>

          <View style={{backgroundColor: 'tomato', width: 80}}>
            <Button title="FILTRO" />
          </View>
        </View>
        <View
          style={{backgroundColor: 'tomato', height: 50, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View style={styles.items}>
              <View style={styles.item}>
                <Text>ScrollItem 1</Text>
              </View>
              <View style={styles.item}>
                <Text>ScrollItem 2</Text>
              </View>
              <View style={styles.item}>
                <Text>ScrollItem 3</Text>
              </View>
              <View style={styles.item}>
                <Text>ScrollItem 4</Text>
              </View>
              <View style={styles.item}>
                <Text>ScrollItem 5</Text>
              </View>
              <View style={styles.item}>
                <Text>ScrollItem 6</Text>
              </View>
              <View style={styles.item}>
                <Text>ScrollItem 7</Text>
              </View>
              <View style={styles.item}>
                <Text>ScrollItem 8</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <ScrollView style={styles.scrollViewContent}>
          {data.map(house => (
            <View key={house.id} style={{padding: 10}}>
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
          ))}
        </ScrollView>

        <Pressable style={styles.buttonMap} onPress={onPressFunction}>
          <Text style={styles.textButton}>BOTON</Text>
        </Pressable>

        <View style={styles.bottomMenu}>
          {/* Barra Inferior */}

          <View style={styles.itemBotton}>
            <Text>Item 1</Text>
            <Text>x</Text>
          </View>
          <View style={styles.itemBotton}>
            <Text>Item 1</Text>
          </View>
          <View style={styles.itemBotton}>
            <Text>Item 1</Text>
          </View>
          <View style={styles.itemBotton}>
            <Text>Item 1</Text>
          </View>
          <View style={styles.itemBotton}>
            <Text>Item 1</Text>
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
    backgroundColor: 'lightgrey',
    height: 50,
  },
  items: {
    flexDirection: 'row', // Items horizontalmente
    height: 50,
  },
  itemsBotton: {
    flexDirection: 'row', // Items horizontalmente
    height: 50,
  },
  item: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  itemBotton: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },

  scrollViewContent: {
    backgroundColor: 'lightblue',
  },
  bottomMenu: {
    backgroundColor: 'lightgreen',
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

export default Container;
