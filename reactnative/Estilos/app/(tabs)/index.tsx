import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
   
      <ThemedView style={styles.stepContainer}>
        <Button title='COMP 1'/>
        <Button title='COMP 2' color="green"/>
        <Button title='COMP 3'/>
      </ThemedView>
  
  );
}

const styles = StyleSheet.create({
 
  stepContainer: {
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'stretch'
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
