import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with profile picture */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/user.jpg')}
          style={styles.profilePicture}
        />
      </View>

      {/* Profile information */}
      <View style={styles.profileInfo}>
        <Text style={styles.name}>James Arthur</Text>
        <Text style={styles.bio}>Software Developer</Text>
        <Text style={styles.location}>New York, USA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProfileScreen;
