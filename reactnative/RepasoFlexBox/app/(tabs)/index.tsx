import { Image, StyleSheet, Button, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
      <ThemedView style={styles.stepContainer}>
        <View style={styles.contenedor2}>
          <Button title='X'/>
          <Button title='Y'/>
          <Button title='Z'/>
        </View>
        <View style={styles.contenedor3}>
          <View style={styles.contenedor5}>
          <View style={styles.contenedor7}>
          <Button title='BOTON 1'/>
          <Button title='BOTON 2'/>
          </View>
          <View style={styles.contenedor8}>
          <Button title='OPERACION 1'/>
          <Button title='OPERACION 2'/>
          <Button title='OPERACION 3'/>
          </View>
          </View>
          <View style={styles.contenedor6}>
          <Button title='ACCION 1'/>
          <Button title='ACCION 2'/>
          </View>
        </View>
        <View style={styles.contenedor4}>
        <Button title='BOTON FINAL'/>
        </View>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    flex:1,
    backgroundColor: 'gray',
    flexDirection:"column",
  },
  contenedor2: {
    flex:1,
    backgroundColor: 'blue',
    flexDirection:"row",
    justifyContent:'flex-end',
    alignItems:'center'
  },
  contenedor3: {
    flex:6,
    backgroundColor: 'green',
    flexDirection:"column",
  },
  contenedor4:{
    flex:1,
    backgroundColor:'yellow',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  contenedor5:{
    flex:4,
    backgroundColor:'white',
    flexDirection:'row',
  },
  contenedor6:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  contenedor7:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'purple',
    justifyContent:'space-around',
    alignItems:'stretch',
  },
  contenedor8:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'flex-start'
  },

});
