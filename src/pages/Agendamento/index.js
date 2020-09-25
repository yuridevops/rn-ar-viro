import * as React from 'react'
import {View, Text, StyleSheet } from 'react-native'

export default function Agendamento(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Pagina de teste
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcba03"
    },
    text: {
        fontSize: 30,
    }
})