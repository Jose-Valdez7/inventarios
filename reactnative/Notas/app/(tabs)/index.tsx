import "react-native-gesture-handler";
import { Image, StyleSheet, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {GradeForm} from '../Screens/GradeForm'
import {ListGrade} from '../Screens/ListGrade'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ContenidoA} from '../Screens/ContenidoA'
import {ContenidoB} from '../Screens/ContenidoB'
import { Icon } from "@rneui/base";

  const StackGrades = createNativeStackNavigator();
  const Drawer=createDrawerNavigator();
  const Tab=createBottomTabNavigator();

  const StackNav=()=>{
    return(
      <StackGrades.Navigator>
      <StackGrades.Screen name='ListGradesNav' component={ListGrade}/>
      <StackGrades.Screen name='GradeFormNav' component={GradeForm}/>  
      </StackGrades.Navigator>
      
    )
  }

  const TabNav=()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen
        name="TabContenidoA"
        component={ContenidoA}
        options={{
          headerShown: false,
          tabBarLabel:"Configuracion",
          tabBarIcon:({size,color})=>{
            return <Icon name="tool" size={24} color='black' type='ant-design'/>
          }
        }}
      />
      <Tab.Screen
        name="TabContenidoB"
        component={ContenidoB}
        options={{
          headerShown: false,
          tabBarLabel:"Acerca De",
          tabBarIcon:()=>{
            return <Icon name="mail" size={24} color='black' type='ant-design'/>
          }
        }}
      />
    </Tab.Navigator>
  )

  }

  const DrawerNav =()=>{
    return(
      <Drawer.Navigator>
        <Drawer.Screen
          name="DrawerProductosNav"
          component={StackNav}
          options={{
            title:'Productos',
          }}
        />
        <Drawer.Screen
          name="DrawerEjemploTabs"
          component={TabNav}
          options={{
            title:'Ejemplo Tabs',
          }}
        />
        <Drawer.Screen
          name="DrawerFinSesion"
          component={StackNav}
          options={{
            title:'Finalizar Sesion',
          }}
        />
      </Drawer.Navigator>
    )
  }

export default function HomeScreen() {
 
  return(
    <NavigationContainer  independent ={true}>
      <DrawerNav/>
    
    </NavigationContainer>
  )
  /*return (
    <NavigationContainer independent={true}>
      <StackGrades.Navigator>
        <StackGrades.Screen name='ListGradesNav' component={ListGrade}/>
        <StackGrades.Screen name='GradeFormNav' component={GradeForm}/>  
      </StackGrades.Navigator>
    </NavigationContainer>

  );*/
}

const styles = StyleSheet.create({
  Container: {
    gap: 8,
    marginBottom: 8,
  },

});
