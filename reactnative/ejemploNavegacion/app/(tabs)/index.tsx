import { Image, StyleSheet, Text, View } from 'react-native';
import {Home} from '/Programacion_Jose/Modulo 3/inventarios/reactnative/ejemploNavegacion/app/Screens/HomeScreen';
import {Contacts} from '/Programacion_Jose/Modulo 3/inventarios/reactnative/ejemploNavegacion/app/Screens/ContactsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Productos} from '/Programacion_Jose/Modulo 3/inventarios/reactnative/ejemploNavegacion/app/Screens/ProductosScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='HomeNav' component={Home} />
        <Stack.Screen name='ContactsNav' component={Contacts} />
        <Stack.Screen name='ProductsNav' component={Productos} />
      </Stack.Navigator>
    </NavigationContainer>
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
