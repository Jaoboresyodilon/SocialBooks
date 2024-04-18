import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.rangementEnLigne}>
          <Image source={require('../assets/images/user.jpg')} style={styles.image} />
          <View style={styles.conteneurTexte}>
            <Text style={styles.titre}>Actuellement dans...</Text>
            <Text style={styles.sousTitre}>Association des Etudiants de...</Text>
            <Text style={styles.slogan}>...</Text>
            <Text style={styles.dateHeure}>il y a 2 heures</Text>
          </View>
        </View>

        <View style={styles.rangementEnLigne}>
          <Image source={require('../assets/images/user.jpg')} style={styles.image} />
          <View style={styles.conteneurTexte}>
            <Text style={styles.titre}>Actuellement dans...</Text>
            <Text style={styles.sousTitre}>Association des Etudiants de...</Text>
            <Text style={styles.slogan}>...</Text>
            <Text style={styles.dateHeure}>il y a 2 heures</Text>
          </View>
        </View>
        <View style={styles.rangementEnLigne}>
          <Image source={require('../assets/images/user.jpg')} style={styles.image} />
          <View style={styles.conteneurTexte}>
            <Text style={styles.titre}>Actuellement dans...</Text>
            <Text style={styles.sousTitre}>Association des Etudiants de...</Text>
            <Text style={styles.slogan}>...</Text>
            <Text style={styles.dateHeure}>il y a 2 heures</Text>
          </View>
        </View>
        <View style={styles.rangementEnLigne}>
          <Image source={require('../assets/images/user.jpg')} style={styles.image} />
          <View style={styles.conteneurTexte}>
            <Text style={styles.titre}>Actuellement dans...</Text>
            <Text style={styles.sousTitre}>Association des Etudiants de...</Text>
            <Text style={styles.slogan}>...</Text>
            <Text style={styles.dateHeure}>il y a 2 heures</Text>
          </View>
        </View>
        <View style={styles.rangementEnLigne}>
          <Image source={require('../assets/images/user.jpg')} style={styles.image} />
          <View style={styles.conteneurTexte}>
            <Text style={styles.titre}>Actuellement dans...</Text>
            <Text style={styles.sousTitre}>Association des Etudiants de...</Text>
            <Text style={styles.slogan}>...</Text>
            <Text style={styles.dateHeure}>il y a 2 heures</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rangementEnLigne: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 20,
  },
  conteneurTexte: {
    width: 300,
  },
  titre: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
  sousTitre: {
    fontSize: 16,
    marginBottom: 5,
    padding: 5,
  },
  slogan: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
    padding: 5,
  },
  dateHeure: {
    fontSize: 12,
    color: '#999',
    padding: 5,
  },
});

export default App;
