import { Image, StyleSheet, Platform, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {
  const[nombre,setNombre]=useState("");
  const[apellido,setApellido]=useState("");


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ejemplo Margin!</ThemedText>
        <HelloWave />
      </ThemedView>
      <TextInput
        style={styles.caja}
        value={nombre}
        onChangeText={(text)=>{setNombre(text)}}
        placeholder='Ingrese su nombre'
      />
      <TextInput
        style={styles.caja}
        value={apellido}
        onChangeText={(txt)=>{setApellido(txt);}}
        placeholder='Ingrese su apellido'
      />
      <Button
      title='OK'
      />
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    flex:1,
    backgroundColor:"#fff",
    flexDirection:'column',//eje principal(vertical)
    justifyContent:'center',//vertical
    alignItems:'stretch',//horizontal
    paddingHorizontal:10,
  },
  caja: {
    borderColor:'gray',
    borderWidth:1,
    paddingTop: 5,
    paddingHorizontal:10, 
    marginBottom:5, 
  },
});
