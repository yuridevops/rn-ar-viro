import * as React from 'react'
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native'
import { Link } from "react-router-native";
import Icon from "react-native-vector-icons/Feather";

Icon.loadFont()

const background = { uri: "https://storage.googleapis.com/sicredi/sicredi-background-branco.png" }


export default function Home({ history }) {

    return (

        <ImageBackground source={background} style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={{ uri: "https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png" }} />

            </View>
            <View style={styles.body}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => history.push('/store')}
                >
                    <Text style={styles.buttonText}>
                        <Icon name={"user"} size={24} color="#fff" />
                        SICREDI STORE
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => history.push('/ar')}
                >
                    <Text style={styles.buttonText}>REALIDADE AUMENTADA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => history.push('/agendamento')}
                >
                    <Text style={styles.buttonText}>AGENDE CONSULTAS</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 35,
        resizeMode: "stretch"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    body: {
        width: "100%",
        marginTop: 100,
        flexWrap: "wrap",
        flexDirection: "row"
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    button: {
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#3FA110",
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: "#3FA110",
        borderRadius: 6,
        margin: 10,
        padding: 20,
        opacity: 0.85
    }
})
