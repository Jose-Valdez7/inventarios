import { StyleSheet, Text, FlatList, View, Button, TextInput, Alert,ScrollView, TouchableHighlight, Modal } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState,useEffect } from 'react';

let productos = [
  { nombre: 'Doritos', categoria: 'Snacks', precioCompra: 0.40, precioVenta: 0.45, id: 100 },
  { nombre: 'Manicho', categoria: 'Golosinas', precioCompra: 0.20, precioVenta: 0.25, id: 101 },
  { nombre: 'Rufles', categoria: 'Snacks', precioCompra: 0.45, precioVenta: 0.60, id: 102 },
  { nombre: 'Trululu', categoria: 'Gomitas', precioCompra: 0.60, precioVenta: 0.75, id: 103 },
  { nombre: 'Ferrero', categoria: 'Golosinas', precioCompra: 0.95, precioVenta: 1.25, id: 104 },
]

let esNuevo = true;
let idSeleccionado = -1;

export default function HomeScreen() {
  const [txtNombre, setTxtNombre] = useState("");
  const [txtCategoria, setTxtCategoria] = useState("");
  const [txtPrecioCompra, setTxtPrecioCompra] = useState("");
  const [txtPrecioVenta, setTxtPrecioVenta] = useState("");
  const [txtId, setTxtId] = useState("");
  const [numElementos, setNumElementos] = useState(productos.length);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (txtPrecioCompra !== "") {
      const nuevoPrecioVenta = (parseFloat(txtPrecioCompra) * 0.20 + parseFloat(txtPrecioCompra)).toFixed(2);
      setTxtPrecioVenta(nuevoPrecioVenta.toString());
    }
  }, [txtPrecioCompra]);

  let ItemProducto = (props) => {
    return (<View style={styles.itemProducto}>
      <View style={styles.itemIndice}><Text style={styles.textoPrincipal}> {props.producto.id}</Text></View>
      <View style={styles.itemContenido}><Text style={styles.textoPrincipal}> {props.producto.nombre} </Text>
        <Text style={styles.textoSecundario}> {props.producto.categoria} </Text></View>
      <View style={styles.itemPrecio}><Text style={styles.textoPrincipal}> {props.producto.precioVenta} </Text></View>
      <View style={styles.itemBotones}>
      
      <TouchableHighlight 
        onPress={() => {
          setTxtCategoria(props.producto.categoria);
          setTxtNombre(props.producto.nombre);
          setTxtPrecioCompra(props.producto.precioCompra);
          setTxtPrecioVenta(props.producto.precioVenta);
          esNuevo = false;
          idSeleccionado = props.indice;
        }}>
        <View style={styles.button}>
          <Text>E</Text>
        </View>
      </TouchableHighlight>

        <Button
          title=' X '
          color='red'
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <Modal animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{setModalVisible(false)}}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Está seguro que quiere eliminar?</Text>
            <View style={styles.buttonContainer}>
              <Button
                title='Aceptar'
                onPress={() => {
                  idSeleccionado = props.indice;
                  productos.splice(idSeleccionado, 1);
                  setNumElementos(productos.length);
                  setModalVisible(false);
                }}
              />
              <Button
                title='Cancelar'
                onPress={() => {
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>);
  }

  let limpiar = () => {
    setTxtNombre("");
    setTxtCategoria("");
    setTxtPrecioCompra("");
    setTxtId("");
    setTxtPrecioVenta("");
    esNuevo = true;
  }

  let guardarProducto = () => {
    if (esNuevo) {
      if (txtId == "" || txtNombre == "" || txtCategoria == "" || txtPrecioCompra == "" || txtPrecioVenta == "") {
        Alert.alert("INFO", "Debe llenar todos los campos ");
      } else {
        let producto = { nombre: txtNombre, categoria: txtCategoria, precioCompra: parseFloat(txtPrecioCompra), precioVenta: parseFloat(txtPrecioVenta), id: parseFloat(txtId) };
        productos.push(producto);
        limpiar();
      }
    } else {
      if (txtNombre == "" || txtCategoria == "" || txtPrecioCompra == "" || txtPrecioVenta == "") {
        Alert.alert("INFO", "Debe llenar todos los campos");
      } else {
        productos[idSeleccionado].nombre = txtNombre;
        productos[idSeleccionado].categoria = txtCategoria;
        productos[idSeleccionado].precioCompra = parseFloat(txtPrecioCompra);
        productos[idSeleccionado].precioVenta = parseFloat((parseFloat(txtPrecioCompra) * 0.20 + parseFloat(txtPrecioCompra)).toFixed(2));
        limpiar();
      }
    }
  }
  return (

    <ThemedView style={styles.stepContainer}>
      <View style={styles.areaCabecera}><ThemedText type='title' style={styles.titulo}>PRODUCTOS </ThemedText>
        <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
        <TextInput
          style={styles.txt}
          value={txtId}
          placeholder='CODIGO'
          onChangeText={setTxtId}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='NOMBRE'
          onChangeText={setTxtNombre}
        />
        <TextInput
          style={styles.txt}
          value={txtCategoria}
          placeholder='CATEGORIA'
          onChangeText={setTxtCategoria}
        />
        <TextInput
          style={styles.txt}
          value={txtPrecioCompra}
          placeholder='PRECIO DE COMPRA'
          keyboardType='decimal-pad'
          onChangeText={setTxtPrecioCompra}
        />
        <TextInput
          style={styles.txt}
          placeholder='PRECIO DE VENTA'
          value={txtPrecioVenta }
          keyboardType='decimal-pad'
          onChangeText={setTxtPrecioVenta}
          editable={false}
        />
        <View style={styles.areaBotones}>
          <Button
            title='Guardar'
            onPress={() => {
              guardarProducto();  
              setNumElementos(productos.length);
            }}
          />
          <Button
            title='Nuevo'
            onPress={() => {
              limpiar();
            }}
          />
          <Text>Productos: {numElementos}</Text>
        </View></View>
        </ScrollView>
      </View>
      <FlatList
        style={styles.areaContenido}
        data={productos}
        renderItem={(obj) => {
          return <ItemProducto
            producto={obj.item} indice={obj.index}
          />
        }}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
      />
      <View style={styles.areaPie}><Text> Autor: Jose Valdez</Text></View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({

  stepContainer: {
    flex: 1,
    //backgroundColor:'blue',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  titulo: {
    flex: 0,
    marginHorizontal: 65,
    alignItems: 'center',
    padding: 10,
  },
  itemProducto: {
    flex:5,
    flexDirection:'row',
    backgroundColor: "navy",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 2,
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
  itemIndice: {
    flex: 2,
    //backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContenido: {
    flex: 6,
    //backgroundColor: 'darkorange',
    paddingLeft: 5,
  },
  itemPrecio: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemBotones: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txt: {
    //backgroundColor: 'darkgray',
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius:6,
    width:'100%'
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding:8,
    alignItems:'center',
  },
  areaCabecera: {
    flex: 0,
    backgroundColor: 'Chocolate',
    justifyContent: 'center',
  },
  areaContenido: {
    flex: 16,
    //backgroundColor: "cadetblue"
  },
  areaPie: {
    flex: 0,
    //backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  scrollView: {
    flexGrow: 1,
    //backgroundColor:"red"
  },
    button: {
    alignItems: 'flex-start',
    backgroundColor: 'green',
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
