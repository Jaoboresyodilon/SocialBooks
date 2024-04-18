import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        const { route } = this.props;
        const { message, imageUri } = route.params || {}; // Utilisation d'une valeur par défaut pour éviter l'erreur

        return (
            <View style={styles.container}>
                {message && <Text style={styles.message}>{message}</Text>}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    message: {
        fontSize: 20,
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "cover",
        borderRadius: 10,
    },
});



/*
import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default class HomeScreen extends React.Component{
    render (){
        return (
            <View style={styles.container}>
                  <Text>Hi!</Text>
                <Text style={{color:"blue", fontWeight: "900"}}>James Arthur</Text>
            </View>
         
        )
    }

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
*/