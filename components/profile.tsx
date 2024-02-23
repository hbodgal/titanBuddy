import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileComponent = ({ imageUrl, username, onLogout }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return (
        <View style={styles.container}>
            <Image 
                // source={imageLoaded ? { uri: imageUrl } : require('../assets/images/user-placeholder.png')}
                source={imageLoaded ? require('../assets/images/user-placeholder.png') : require('../assets/images/user-placeholder.png')}
                style={styles.profileImage}
                onLoad={() => setImageLoaded(true)}
            />
            <Text style={styles.usernameText}>{username}</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    profileImage: {
        width: 220,
        height: 220,
        borderRadius: 60,
        marginBottom: 20,
    },
    usernameText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 100,
        color: '#FFF'
    },
    logoutButton: {
        backgroundColor: '#FF5A5F',
        padding: 25,
        borderRadius: 30,
        width: 250,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default ProfileComponent;
