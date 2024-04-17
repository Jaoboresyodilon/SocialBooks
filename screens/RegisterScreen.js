import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", // Initialiser l'état du nom à une chaîne vide
            email: "", // Initialiser l'état de l'email à une chaîne vide
            password: "", // Initialiser l'état du mot de passe à une chaîne vide
            errorMessage: "", // Initialiser le message d'erreur à une chaîne vide
        };
    }

    handleNameChange = (name) => {
        this.setState({ name }); // Mettre à jour l'état du nom lorsque l'utilisateur modifie le champ de saisie
    };

    handleEmailChange = (email) => {
        this.setState({ email }); // Mettre à jour l'état de l'email lorsque l'utilisateur modifie le champ de saisie
    };

    handlePasswordChange = (password) => {
        this.setState({ password }); // Mettre à jour l'état du mot de passe lorsque l'utilisateur modifie le champ de saisie
    };
   
    handleSignUp = () => {
        // Vérifier si les champs de nom, d'email et de mot de passe sont vides
        if (this.state.name === "" || this.state.email === "" || this.state.password === "" ) {
            this.setState({ errorMessage: "Veuillez remplir tous ces champs svp !" });
        } else {
            // Si les champs ne sont pas vides, naviguer vers la page "App"
            this.props.navigation.navigate('App');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>Bonjour!{'\n'}Inscrivez-vous pour commencer</Text>
                <View style={styles.errorMessage}>{this.state.errorMessage !== "" && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Votre Nom</Text>
                        <TextInput  
                            style={styles.input} 
                            autoCapitalize="none" 
                            onChangeText={this.handleNameChange} // Utiliser la fonction de gestion pour mettre à jour l'état du nom
                            value={this.state.name} // Utiliser la valeur de l'état du nom comme valeur du champ de saisie
                        />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Adresse Email</Text>
                        <TextInput  
                            style={styles.input} 
                            autoCapitalize="none" 
                            onChangeText={this.handleEmailChange} // Utiliser la fonction de gestion pour mettre à jour l'état de l'email
                            value={this.state.email} // Utiliser la valeur de l'état de l'email comme valeur du champ de saisie
                        />
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Mot de passe</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize="none"
                            onChangeText={this.handlePasswordChange} // Utiliser la fonction de gestion pour mettre à jour l'état du mot de passe
                            value={this.state.password} // Utiliser la valeur de l'état du mot de passe comme valeur du champ de saisie
                        />
                    </View>


                    <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Inscription</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
    },
    errorMessage: {
        height: 72,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30,
    },
    inputTitle: {
        color: "#BA8F9E",
        fontSize: 10,
        textTransform: "uppercase",
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30,
    },
    input: {
        borderBottomColor: "#BA8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D", // Correction de la couleur
    },
    button: {
        marginHorizontal: 30,
        marginTop: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    },
});

 




/*import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as firebase from'firebase'

export default class LoginScreen extends React.Component {
    state = {
        email:"",
        password:"",
        errorMessage: null
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>Hello again.{'\n'}Welcome back.</Text>
                <View style={styles.errorMessage}>
                    <Text>Error</Text>
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput  style={styles.input} autoCapitalize="none" onChangeText={email => this.setState({ email })} value={this.state.email}></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none"onChangeText={password => this.setState({ password })} value={this.state.password} ></TextInput>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}>
                        <Text style={{ color: "#414959", fontSize: 13 }}>
                            New to SocialApp? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
    },
    errorMessage: {
        height: 72,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30,
    },
    inputTitle: {
        color: "#BA8F9E",
        fontSize: 10,
        textTransform: "uppercase",
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30,
    },
    input: {
        borderBottomColor: "#BA8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D", // Correction de la couleur
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    },
});
*/