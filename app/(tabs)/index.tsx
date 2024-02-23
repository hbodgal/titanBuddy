import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, Text, KeyboardAvoidingView, Platform, Image } from 'react-native';

export default function TabOneScreen() {
  const initialMessages = [
    { id: '1', text: 'Hello!', user: { name: 'Harsh', icon: '../../assets/images/user-placeholder.png' } },
    { id: '2', text: 'Hi there!', user: { name: 'Harsh', icon: '../../assets/images/user-placeholder.png' } },
    { id: '3', text: 'Welcome to Titan Buddy!', user: { name: 'Harsh', icon: '../../assets/images/user-placeholder.png' } },
    { id: '4', text: 'Thanks! Just joined. Excited to be here.', user: { name: 'Chris', icon: '../../assets/images/user-placeholder.png' } },
    { id: '5', text: 'Anyone up for a study session this weekend?', user: { name: 'Harsh', icon: '../../assets/images/user-placeholder.png' } },
    { id: '6', text: 'Count me in! Struggling with calculus.', user: { name: 'Diana', icon: '../../assets/images/user-placeholder.png' } },
    { id: '7', text: 'Titan Buddy makes campus life so much easier.', user: { name: 'Alice', icon: '../../assets/images/user-placeholder.png' } },
    { id: '8', text: 'Absolutely! Met so many amazing people here.', user: { name: 'Chris', icon: '../../assets/images/user-placeholder.png' } },
    { id: '9', text: 'Who’s joining the virtual Titan trivia night?', user: { name: 'Harsh', icon: '../../assets/images/user-placeholder.png' } },
    { id: '10', text: 'I am! Last time was super fun.', user: { name: 'Bob', icon: '../../assets/images/user-placeholder.png' } },
    { id: '11', text: 'Hey, does anyone know a good tutor for physics?', user: { name: 'Fiona', icon: '../../assets/images/user-placeholder.png' } },
    { id: '12', text: 'Yes! I can give you a reference.', user: { name: 'Diana', icon: '../../assets/images/user-placeholder.png' } },
    { id: '13', text: 'Anyone tried the new coffee shop on campus?', user: { name: 'Chris', icon: '../../assets/images/user-placeholder.png' } },
    { id: '14', text: 'Yes, their lattes are amazing!', user: { name: 'Alice', icon: '../../assets/images/user-placeholder.png' } },
    { id: '15', text: 'Need a study buddy for the library this afternoon.', user: { name: 'Gavin', icon: '../../assets/images/user-placeholder.png' } },
    { id: '16', text: 'I’ll join you! Prepping for my history exam.', user: { name: 'Ella', icon: '../../assets/images/user-placeholder.png' } },
    { id: '17', text: 'Titan Buddy’s chat feature is a game-changer.', user: { name: 'Bob', icon: '../../assets/images/user-placeholder.png' } },
    { id: '18', text: 'For sure! That’s how we communicate.', user: { name: 'Harsh', icon: '../../assets/images/user-placeholder.png' } },
    { id: '19', text: 'Love the community here! #GoTitans', user: { name: 'Diana', icon: '../../assets/images/user-placeholder.png' } },
    { id: '20', text: 'Glad to be part of this awesome Titan Buddy family!', user: { name: 'Chris', icon: '../../assets/images/user-placeholder.png' } },
  ];
  
  const [messages, setMessages] = useState(initialMessages);
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: currentMessage,
        user: {
          name: 'Harsh', // Replace with actual user name
          icon: '../../assets/images/user-placeholder.png' // Replace with actual icon URL or local asset
        }
      };
      setMessages(previousMessages => [...previousMessages, newMessage]);
      setCurrentMessage('');
    }
  };

  const renderMessageItem = ({ item, index }) => {
    const isCurrentUser = item.user.name === 'Harsh'; // Replace 'Harsh' with the actual current user's name
    // const showUserName = index === messages.length - 1 || messages[index + 1].user.name !== item.user.name;
    const isFirstMessageByUser = index === 0 || messages[index - 1].user.name !== item.user.name;

    return (
      <View style={[styles.messageBubble, isCurrentUser ? styles.currentUserBubble : styles.otherUserBubble]}>
        {isFirstMessageByUser && (
          <View style={styles.messageHeader}>
            {/* <Image source={{ uri: item.user.icon }} style={styles.userIcon} /> */}
            <Text style={styles.userName}>{item.user.name}</Text>
          </View>
        )}
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => renderMessageItem({item, index})}
        // inverted
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={currentMessage}
          onChangeText={setCurrentMessage}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  messageText: {
    color: '#000',
    fontWeight: 'bold'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    color: '#fff',
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    padding: 10,
  },
  sendButtonText: {
    color: '#fff',
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    color: ''
  },
  currentUserBubble: {
    backgroundColor: '#708090', // Color for current user
    alignSelf: 'flex-end',
  },
  otherUserBubble: {
    backgroundColor: '#5f9ea0', // Color for other users
    alignSelf: 'flex-start',
  },
});
