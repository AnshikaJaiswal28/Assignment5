import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import { Link, useRouter } from "expo-router";


const LoginScreen = () => {
    const router = useRouter(); // Get the router instance
  
    const handleContinue = () => {
      // Implement your logic here for handling the "Continue" button press
      // For example, you can navigate to the home screen like this:
      router.push('/users/1');
    };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    ellipse: {
      width: 520,
      height: 520,
      borderRadius: 260,
      backgroundColor: '#DCF9E5',
      position: 'absolute',
      top: -350,
      left: -80,
      shadowColor: '#00000040',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 4,
      alignItems: 'center', // Add this line to center the icon inside the ellipse
      justifyContent: 'center', // Add this line to center the icon inside the ellipse
    },
    nurturehealIcon: {
      width: 120, // Adjust the size as needed
      height: 100, // Adjust the size as needed 
      left: 20,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#9C06AF',
      marginBottom: 10,
    },
    loginText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#00000099',
      marginBottom: 20,
    },
    inputLabel: {
      marginRight: 10,
      paddingRight: 140,
      fontSize: 14,
      fontWeight: '500',
      color: '#000000',
      marginBottom: 5,
      textAlign: 'left',
      
    },
    input: {
      width: '80%',
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 6,
      backgroundColor: '#EAEAEA',
      marginBottom: 20,
    },
    button: {
      width: '80%',
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 6,
      backgroundColor: '#6C63FF',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    line: {
      width: '80%',
      height: 0,
      borderTopWidth: 2,
      borderTopColor: '#BABABA66',
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    orText: {
      width: 16,
      height: 16,
      backgroundColor: '#fff',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    orTextInner: {
      width: 16,
      height: 16,
      opacity: 0.5,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    socialIcons: {
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 20,
    },
    socialIconCircle: {
      width: 40,
      height: 40,
      borderWidth: 2,
      borderColor: '#00000080',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    socialIcon: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    footerText: {
      fontSize: 14,
      fontWeight: '400',
    },
  });

  return (
    <View style={styles.container}>
      {/* Render the ellipse */}
      <View style={styles.ellipse}>
        {/* Render the Nurtureheal icon */}
        
      </View>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.loginText}>Login to your account</Text>
      <Text style={styles.inputLabel}>Email or mobile number</Text>
      <TextInput style={styles.input} placeholder="Enter your mail or mobile number" />
      <Link href="/users/1" asChild>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </Link>
      <View style={styles.line}>
        <View style={styles.orText}>
          <Text style={styles.orTextInner}>or</Text>
        </View>
      </View>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialIconCircle}>
          <Text style={styles.socialIcon}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconCircle}>
          <Text style={styles.socialIcon}>f</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconCircle}>
          <Text style={styles.socialIcon}>X</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>Not a member? <Text style={{ color: '#6C63FF' }}>Create Account</Text></Text>
    </View>
  );
};

export default LoginScreen; 