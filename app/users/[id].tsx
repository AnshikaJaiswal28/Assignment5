// app/screens/HomeScreen.tsx
/*import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const MovieListScreen = () => {
  const [movies, setMovies] = useState<string[]>([]);
  const [newMovie, setNewMovie] = useState('');

  const handleAddMovie = () => {
    if (newMovie.trim()) {
      setMovies([...movies, newMovie.trim()]);
      setNewMovie('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movie List</Text>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.movieItem}>{item}</Text>}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter movie name"
          value={newMovie}
          onChangeText={(text) => setNewMovie(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddMovie}>
          <Text style={styles.buttonText}>Add Movie</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  movieItem: {
    fontSize: 18,
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 400,
  },
  input: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MovieListScreen;*/

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter, useFocusEffect } from "expo-router";


interface ProfileData {
  name: string;
  dateOfBirth: string;
  email: string;
  mobile: string;
  gender: string;
  address: string;
  pincode: string;
}

const { width, height } = Dimensions.get('window');
const frameHeight = height - 40; // Subtracting 20px margin from top and bottom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
    height: frameHeight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCF9E5',
    width: width,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#400649',
  },
  fieldContainer: {
    alignItems: 'flex-start',
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    borderWidth: 0,
    backgroundColor: '#BABABA',
    borderRadius: 4,
    padding: 8,
    width: '100%',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align options to the left
    marginRight: 16,
  },
  genderText: {
    fontWeight: 'bold',
    paddingLeft: 4, 

  },

  updateButtonDiv: {
    position: 'absolute',
    bottom: 30,
  },

  updateButton: {
    backgroundColor: '#8464C2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: -10,
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const Myprofile: React.FC = () => {
    const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    dateOfBirth: '',
    email: '',
    mobile: '',
    gender: '',
    address: '',
    pincode: '',
  });

  const handleGenderSelection = (gender: string) => {
    setProfileData({ ...profileData, gender });
  };

  const handleUpdate = () => {
    // Add update logic here
  };

  const navigateBack = () => {
    router.back(); // Navigate back to the previous screen
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.header}>
      <TouchableOpacity onPress={navigateBack}>
          <Ionicons name="arrow-back" size={24} color="#400649" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={profileData.name}
            onChangeText={(text) => setProfileData({ ...profileData, name: text })}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Date of Birth:</Text>
          <TextInput
            style={styles.input}
            value={profileData.dateOfBirth}
            onChangeText={(text) => setProfileData({ ...profileData, dateOfBirth: text })}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={profileData.email}
            onChangeText={(text) => setProfileData({ ...profileData, email: text })}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mobile:</Text>
          <TextInput
            style={styles.input}
            value={profileData.mobile}
            onChangeText={(text) => setProfileData({ ...profileData, mobile: text })}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Gender:</Text>
          <View style={styles.genderContainer}>
  <TouchableOpacity
    style={styles.genderOption}
    onPress={() => handleGenderSelection('Male')}
  >
    <Ionicons
      name={profileData.gender === 'Male' ? 'checkbox' : 'square-outline'}
      size={24}
      color="#400649"
    />
    <Text style={styles.genderText}>Male</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.genderOption}
    onPress={() => handleGenderSelection('Female')}
  >
    <Ionicons
      name={profileData.gender === 'Female' ? 'checkbox' : 'square-outline'}
      size={24}
      color="#400649"
    />
    <Text style={styles.genderText}>Female</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.genderOption}
    onPress={() => handleGenderSelection('Others')}
  >
    <Ionicons
      name={profileData.gender === 'Others' ? 'checkbox' : 'square-outline'}
      size={24}
      color="#400649"
    />
    <Text style={styles.genderText}>Others</Text>

  </TouchableOpacity>
</View>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={profileData.address}
            onChangeText={(text) => setProfileData({ ...profileData, address: text })}
            multiline
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Pincode:</Text>
          <TextInput
            style={styles.input}
            value={profileData.pincode}
            onChangeText={(text) => setProfileData({ ...profileData, pincode: text })}
          />
        </View>
        <View style={styles.updateButtonDiv}>
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Myprofile;