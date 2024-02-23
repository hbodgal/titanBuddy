import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="username@csu.fullerton.edu"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

<TouchableOpacity style={styles.loginButton} onPress={onLogin}>
  <Text style={styles.loginButtonText}>Login</Text>
</TouchableOpacity>

      <View style={styles.linksContainer}>
        {/* <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity> */}
        <TouchableOpacity>
          {/* onPress={() => navigation.navigate('SignupScreen')} */}
          {/* <Text style={styles.link}>Signup</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#000',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#FFF',
    },
    input: {
      height: 40,
      borderColor: '#888',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      color: '#FFF',
      backgroundColor: '#222',
    },
    linksContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    link: {
      color: '#4A90E2',
      textDecorationLine: 'underline',
    },
    loginButton: {
        backgroundColor: '#4A90E2', // A pleasant shade of blue
        borderRadius: 25,           // Rounded edges
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,              // Spacing it a bit from other elements
      },
      loginButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
      },
  });
  

export default Login;
