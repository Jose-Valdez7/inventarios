import {View, Text, StyleSheet} from 'react-native';

export const ContenidoA=()=>{

    return(
        <View style={StyleSheet.container}>
            <Text>CONTENIDO A</Text>
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