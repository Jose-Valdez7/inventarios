import {View, Text, StyleSheet} from 'react-native';

export const ContenidoB=()=>{

    return(
        <View style={StyleSheet.container}>
            <Text>CONTENIDO B</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'stretch',
        justifyContent:'center',
    },
})