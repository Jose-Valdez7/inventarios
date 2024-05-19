import { Alert, Image, StyleSheet, Text } from 'react-native';
import { Button,Icon, Input } from '@rneui/base';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useState} from 'react'

export default function HomeScreen() {
  const[name,setName]=useState("");

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
        <ThemedText type="title">RNE</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <Input
          value={name}
          onChangeText={setName}
          placeholder='Ingrese su Nombre'
          label='Nombre'
        />
        <Text>{name}</Text>
        <Button
          title='OK'
          icon={{
            name: 'home',
            type: 'font-awesome',
            size: 20,
            color: 'white',
            }}
            onPress={()=>{
              Alert.alert("INFO","Su nombre es "+name)
            }}
            />
        <Button
          title='CANCEL'
          icon={<Icon
            name= 'plancast'
            type= 'zocial'
            color= 'white'
            />}
            />
        <Icon
            name= 'linkenid'
            type= 'zocial'
            color= 'black'
            />   
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
  },
});
