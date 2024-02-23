import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EventCard = ({ event }) => (
  <View style={styles.card}>
    <Image source={{ uri: event.image }} style={styles.image} />
    <Text style={styles.eventName}>{event.name}</Text>
    <Text style={styles.eventDate}>{event.date}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  eventDate: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
});

export default EventCard;
