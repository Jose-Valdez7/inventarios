import { Image, StyleSheet, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {GradeForm} from '../Screens/GradeForm'
import {ListGrade} from '../Screens/ListGrade'


export default function HomeScreen() {
  const StackGrades = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <StackGrades.Navigator>
        <StackGrades.Screen name='ListGradesNav' component={ListGrade}/>
        <StackGrades.Screen name='GradeFormNav' component={GradeForm}/>  
      </StackGrades.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container: {
    gap: 8,
    marginBottom: 8,
  },

});
