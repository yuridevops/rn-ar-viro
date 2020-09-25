import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


export default function Store({history}) {
    return (
        <View style={styles.container}>
            <Button title="Go Back" color="red" onPress={() => history.goBack()} />
        </View>
    )
    
    
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    text: {
        fontSize: 30
    }
})
