import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
//import firebase from 'firebase';

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Auth");
        }, 10000); 
    }
    
    render() {
        return (

        <View style={styles.container}>
                    <Text style={styles.text}>Chargement...</Text>
                    <ActivityIndicator size="large" />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#5F5FCC',
    },
    text: {
        color: "white",
    },

});



/*import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from 'firebase';

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => { // Correction de la fonction onAuthStateChanged
            this.props.navigation.navigate(user ? "App" : "Auth"); // Correction de la fonction onAuthStateChanged
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
* /












/* import React from "react";
import { View,Text,StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from 'firebase';

export default class LoadingScreen extends React.Component{
    componentDidMount (){
        firebase.auth().onAuthStateChanger(user => {
            this.props.navigation.navigate(user ? "App" : "Auth")
        });
    }
    render (){
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
         
        );
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