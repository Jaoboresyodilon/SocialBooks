import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default class PostScreen extends React.Component {
    state = {
        message: "",
        imageUri: null,
    };

    handleCameraPress = async () => {
        // Demander la permission d'accéder à la galerie de photos
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission de la galerie de photos refusée');
            return;
        }

        // Ouvrir la galerie de photos et attendre la sélection d'une image
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // Vérifier si l'utilisateur a sélectionné une image
        if (!result.cancelled && result.uri) {
            // Mettre à jour l'état avec l'URI de l'image sélectionnée
            this.setState({ imageUri: result.uri });
        }
    };

    handlePublish = () => {
        const { message, imageUri } = this.state;

        // Vérifier si le message est vide
        if (!message.trim()) {
            Alert.alert('Message vide', 'Veuillez saisir un message avant de publier.');
            return;
        }

        // Naviguer vers la page Home avec les données du message et de l'image
        this.props.navigation.navigate('Home', {
            message: message,
            imageUri: imageUri,
        });
    };

    render() {
        const { message, imageUri } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.inputcontainer}>
                    <Image source={require("../assets/images/user.jpg")} style={styles.avatar}></Image>
                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        style={{ flex: 1 }}
                        placeholder="Envie de partager quelque chose?"
                        onChangeText={(text) => this.setState({ message: text })}
                    ></TextInput>
                    <TouchableOpacity style={styles.photo} onPress={this.handleCameraPress}>
                        <Ionicons name="camera" size={32} color="#DBD9DB"></Ionicons>
                    </TouchableOpacity>
                </View>
                {imageUri && (
                    <View style={styles.imageContainer}>
                        <Text style={styles.imageLabel}>Image sélectionnée :</Text>
                        <Image source={{ uri: imageUri }} style={styles.selectedImage} />
                    </View>
                )}
                <TouchableOpacity style={styles.button} onPress={this.handlePublish}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Publier</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputcontainer:{
        margin: 32,
        flexDirection: "row"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 10
    },
    photo:{
        alignItems: "flex-end",
        marginHorizontal: 20
    },
    imageContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    imageLabel: {
        fontSize: 16,
        marginBottom: 10,
    },
    selectedImage: {
        width: 300,
        height: 300,
        resizeMode: "cover",
        borderRadius: 10,
    },
    button: {
        marginHorizontal: 100,
        marginTop: 20,
        backgroundColor: "#4747E7",
        borderRadius: 8,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});
