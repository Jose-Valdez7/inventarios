import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> HOME</Text>
            <View style={styles.container2}>
                <Button
                    title='CONTACTOS'
                    onPress={() => {
                        navigation.navigate("ContactsNav")
                    }}
                />
                <View style={{ width: 86 }} />
                <Button
                    title='PRODUCTOS'
                    onPress={() => {
                        navigation.navigate("ProductsNav")
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        alignItems: 'center',
    },
});