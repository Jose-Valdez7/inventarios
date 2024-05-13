import { Image, StyleSheet, Platform, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {
  
  const[estatura,setEstatura]=useState(170);
  const[peso,setPeso]=useState(100);
  const[estatura2,setEstatura2]=useState(0);
  const[resultado,setResultado]=useState(0);


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">CALCULADORA IMC!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">ESTATURA</ThemedText>
      <ThemedText style={styles.subtitle2}>en centimetro</ThemedText>
      <TextInput
        style={styles.caja}
        keyboardType='decimal-pad'
        value={estatura.toString()}
        onChangeText={(txt)=>{setEstatura(parseFloat(txt))}}
      />
      <ThemedText type="subtitle">PESO</ThemedText>
      <ThemedText style={styles.subtitle2}>en kilogramos</ThemedText>
      <TextInput
        style={styles.caja}
        keyboardType='decimal-pad'
        value={peso.toString()}
        onChangeText={(txt)=>{setPeso(parseFloat(txt));}}
        placeholder='Ingrese su peso'
      />
      <Button
      title='CALCULAR'
      onPress={()=>{setEstatura2(estatura/100);setResultado(peso/(estatura2*estatura2))}}
      />
      <ThemedText style={styles.subtitle2}>Su IMC es: {resultado.toFixed(2)} {resultado<18.5 && ('Tiene Peso Inferior al normal')}
      {(resultado>18.5 && resultado<24.9) && ('Tiene Peso Normal')} {(resultado>25 && resultado<29.9) && ('Tiene Peso Superior al normal')}
      {resultado>30 && ('Tiene Obesidad')}</ThemedText>      
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
    alignItems:'center',//horizontal
    paddingHorizontal:10,
  },
  caja: {
    borderColor:'gray',
    borderWidth:1,
    paddingTop: 5,
    paddingHorizontal:10, 
    marginBottom:5, 
    width:200,
    
  },
  subtitle2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});