import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

export function LOPDScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>
        En nuestra organización, reconocemos la importancia fundamental de
        proteger la privacidad y la seguridad de los datos de nuestros usuarios,
        clientes y empleados. Esta Política de Datos establece los principios y
        procedimientos que guían la recopilación, el almacenamiento, el
        procesamiento y el intercambio de datos en nuestra empresa.
      </Text>
    </View>
  );
}
