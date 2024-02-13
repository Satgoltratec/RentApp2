import React from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Container() {
  const onPressFunction = () => {
    Alert.alert('BOTON PULSADO');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        {/* Barra de búsqueda */}
        <Text>Busqueda</Text>
      </View>
      <View style={{height: 50}}>
        <ScrollView horizontal={true} style={styles.scrollViewCategory}>
          <View style={styles.items}>
            <Text style={styles.item}>Item 1</Text>
            <Text style={styles.item}>Item 2</Text>
            <Text style={styles.item}>Item 3</Text>
            <Text style={styles.item}>Item 4</Text>
            <Text style={styles.item}>Item 5</Text>
            <Text style={styles.item}>Item 6</Text>
            <Text style={styles.item}>Item 7</Text>
            <Text style={styles.item}>Item 8</Text>
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.scrollViewContent}>
        {/* Contenido del ScrollView */}
        <Text>SCROLL</Text>
        <Text>SCROLL</Text>
      </ScrollView>
      <View style={styles.bottomMenu}>
        {/* Barra Inferior */}

        <Pressable style={styles.buttonMap} onPress={onPressFunction}>
          <Text style={styles.textButton}>BOTON</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
  },
  search: {
    backgroundColor: 'grey',
    height: 50,
  },
  items: {
    flexDirection: 'row', // Items horizontalmente
    alignItems: 'center',
    height: 50,
  },
  item: {
    margin: 10,
  },

  scrollViewCategory: {
    backgroundColor: 'lightblue',
    height: 23,
  },
  scrollViewContent: {
    backgroundColor: 'tomato',
  },
  bottomMenu: {
    backgroundColor: 'yellow',
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
