import React, { useState } from 'react';
import Collapse from 'react-native-collapsible'; // You'd need to install this library
import { Calendar } from 'react-native-calendars';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You'd need to install this library

const CollapsibleCalendar = ({ onDateSelected }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
    onDateSelected(day.dateString);
    setIsCollapsed(!isCollapsed);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View>
      <TouchableOpacity style={styles.header} onPress={toggleCollapse}>
        <Text style={styles.headerText}>Select Date</Text>
        <Icon name={isCollapsed ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={24} />
      </TouchableOpacity>
      <Collapse collapsed={isCollapsed}>
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{ [selectedDate]: { selected: true, selectedColor: '#blue' } }}
          // Add additional styling here
        />
      </Collapse>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    zIndex: 10
    // Additional styles may be required
  },
  headerText: {
    fontWeight: 'bold',
    zIndex: 10
    // Other text styling
  },
  // Add other styles as needed
});

export default CollapsibleCalendar;
