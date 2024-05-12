import { Image, StyleSheet, Platform, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {
  const[Valor,setValor]=useState(0);
  const[Resul,setResul]=useState(0);
  const[moneda,setMoneda]=useState('');

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
        <ThemedText type="title">Convertidor!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <TextInput
        style={styles.cajaTexto}
        keyboardType='decimal-pad'
        value={Valor.toString()}
        onChangeText={(txt)=>{setValor(parseFloat(txt))}}
      />
      <Button title='PESOS MEXICANOS' onPress={()=>{setResul(Valor*16.78); setMoneda("PESOS MEXICANOS");}}/>
      <Button title='PESOS COLOMBIANOS' onPress={()=>{setResul(Valor*3886.64); setMoneda("PESOS COLOMBIANOS");}}/>
      <Button title='EUROS ' onPress={()=>{setResul(Valor*0.93); setMoneda("EUROS")}}/>
      <ThemedText> RESULTADO: {Resul.toFixed(2)} {moneda} </ThemedText>
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
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
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
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },cajaTexto:{
    borderColor:"black",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
  },
});