// Code for tab four screen
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import ProfileComponent from '../../components/profile';
import React, { useContext } from 'react';
// import AuthContext from '../AuthContext'; // Update the path
import { AuthProvider, useAuth } from '../AuthContext';

export default function TabFourScreen() {
    const { handleLogout } = useAuth();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Four</Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ProfileComponent 
            imageUrl="https://example.com/path/to/profile/photo.jpg" 
            username="JohnDoe"
            onLogout={() => {
                // Handle logout logic here
                // setIsLoggedIn(true); 
                console.log("Logged out from another component!");
                handleLogout();
            }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
