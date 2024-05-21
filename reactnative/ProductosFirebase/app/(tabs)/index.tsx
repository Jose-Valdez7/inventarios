import "react-native-gesture-handler";
import { Image, StyleSheet, Platform } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

const Drawer=createDrawerNavigator();
const DrawerNav =()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen
        name="DrawerProductosNav"
        component={ProductosNav}
        options={{
          title:'Productos',
        }}
      />
      <Drawer.Screen
        name="DrawerEjemploTabs"
        component={ProductosNav}
        options={{
          title:'Ejemplo Tabs',
        }}
      />
      <Drawer.Screen
        name="DrawerFinSesion"
        component={ProductosNav}
        options={{
          title:'Finalizar Sesion',
        }}
      />
    </Drawer.Navigator>
  )
}

export default function HomeScreen() {

  return(
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
  )

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
