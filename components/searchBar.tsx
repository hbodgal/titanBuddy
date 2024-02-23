import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChange }) => (
  <TextInput 
    style={styles.searchBar}
    placeholder="Search Events"
    value={value}
    onChangeText={onChange}
  />
);

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default SearchBar;
