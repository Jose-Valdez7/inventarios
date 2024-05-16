import { Image, StyleSheet, Text, FlatList, View, Button, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react'


let personas = [
  { nombre: 'Thor', apellido: 'Thillas', cedula: '0938271625' },
  { nombre: 'Amber', apellido: 'Flores', cedula: '1728390415' },
  { nombre: 'Peter', apellido: 'Parker', cedula: '1309873651' },
]

//esNuevo indica si se esta creando una nueva persona o se esta modificando una existente
let esNuevo = true;
//indiceSeleccionado la variable almacena el indice del arreglos del elemento selecccionado para la edicion
let indiceSeleccionado = -1;

export default function HomeScreen() {
  const [txtNombre, setTxtNombre] = useState("");
  const [txtApellido, setTxtApellido] = useState("");
  const [txtCedula, setTxtCedula] = useState("");
  const [numElementos, setNumElementos] = useState(personas.length);

  let ItemPersona = ({indice,persona}) => {
    return (<View style={styles.itemPersona}>
      <View style={styles.itemIndice}><Text style={styles.textoPrincipal}> {indice}</Text></View>
      <View style={styles.itemContenido}><Text style={styles.textoPrincipal}> {persona.nombre} {persona.apellido}</Text>
        <Text style={styles.textoSecundario}> {persona.cedula}</Text></View>
      <View style={styles.itemBotones}>
        <Button
          title=' E '
          color='green'
          onPress={() => {
            setTxtCedula(persona.cedula);
            setTxtNombre(persona.nombre);
            setTxtApellido(persona.apellido);
            esNuevo = false;
            indiceSeleccionado = indice;
          }}
        />
        <Button
          title=' X '
          color='red'
          onPress={() => {
            indiceSeleccionado = indice;
            personas.splice(indiceSeleccionado, 1);
            //splice funcion para borrar cosas del arreglo
            //recibe 2 parametros desde que posicion se va a borrar
            // segundo cuantos voy a borrar
            console.log("ARREGLO PERSONAS", personas);
            setNumElementos(personas.length);
          }}
        />

      </View>
    </View>);
  }

  let limpiar = () => {
    setTxtNombre("");
    setTxtApellido("");
    setTxtCedula("");
    esNuevo = true;
  }

  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtCedula) {
        return true;
      }
    }
    return false;
  }

  let guardarPersona = () => {
    if (esNuevo) {
      if (existePersona()) {
        Alert.alert("INFO", "Ya existe una personas con la cedula " + txtCedula);
      } else {
        let persona = { nombre: txtNombre, apellido: txtApellido, cedula: txtCedula };
        personas.push(persona);
      }
    } else {
      personas[indiceSeleccionado].nombre = txtNombre;
      personas[indiceSeleccionado].apellido = txtApellido;
    }
    limpiar();
  }

  return (
    <ThemedView style={styles.stepContainer}>
      <View style={styles.areaCabecera}><ThemedText type='title' >PERSONAS 1</ThemedText>
        <TextInput
          style={styles.txt}
          value={txtCedula}
          placeholder='Ingrese su Cedula'
          onChangeText={setTxtCedula}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su Nombre'
          onChangeText={setTxtNombre}
        />
        <TextInput
          style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su Apellido'
          onChangeText={setTxtApellido}
        />
        <View style={styles.areaBotones}>
          <Button
            title='Guardar'
            onPress={() => {
              guardarPersona();
              setNumElementos(personas.length);
            }}
          />
          <Button
            title='Nuevo'
            onPress={() => {
              limpiar();
            }}
          />
        </View>
        <Text>Elementos: {numElementos}</Text>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={({index,item}) => {
            return <ItemPersona indice={index} persona={item}
            />
          }}
          keyExtractor={item => item.cedula}
        /></View>
      <View style={styles.areaPie}><Text> Autor: Jose Valdez</Text></View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({

  stepContainer: {
    flex: 1,
    //backgroundColor: 'lightblue',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  lista: {
    //backgroundColor: 'lightpink',
  },
  itemPersona: {
    flexDirection: 'row',
    backgroundColor: "navy",
    marginBottom: 10,
    padding: 10,

  },
  textoPrincipal: {
    fontSize: 20,
    color: 'white'
  },
  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 16,
    color: 'yellow'
  },
  areaCabecera: {
    flex: 4,
    //backgroundColor: 'Chocolate',
    justifyContent: 'center',
  },
  areaContenido: {
    flex: 6,
    //backgroundColor: "cadetblue"
  },
  areaPie: {
    flex: 1,
    //backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  itemIndice: {
    flex: 1,
    //backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContenido: {
    flex: 6,
    //backgroundColor: 'darkorange',
    paddingLeft: 5,
  },
  itemBotones: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  }
});
