import { Image, StyleSheet, Button, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
      <ThemedView style={styles.stepContainer}>
        <View style={styles.contenedor2}></View>
        <View style={styles.contenedor3}>
          <View style={styles.contenedor4}></View>
          <View style={styles.contenedor5}>
            <View style={styles.contenedor6}></View>
            <View style={styles.contenedor7}>
              <Button title='BOTON 1'/>
              <Button title='BOTON 2'/>
              <Button title='BOTON 3'/>
            </View>
          </View>
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
    flexDirection:"column",
  },
  contenedor3: {
    flex:3,
    backgroundColor: 'green',
    flexDirection:"column",
  },
  contenedor4:{
    flex:1,
    backgroundColor:'yellow',
    flexDirection:'column',
  },
  contenedor5:{
    flex:1,
    backgroundColor:'white',
    flexDirection:'row',
  },
  contenedor6:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'pink'
  },
  contenedor7:{
    flex:2,
    flexDirection:'column',//eje principal (VERTICAL)
    backgroundColor:'purple',
    justifyContent:'space-around',//centrado vertical(principal)
    alignItems:'stretch',//(eje secundario)
  }
});
