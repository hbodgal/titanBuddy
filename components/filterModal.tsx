import React, { useState } from "react";
import { View, Modal, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Picker } from '@react-native-picker/picker';

const FilterModal = ({ isVisible, toggleModal }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [theme, setTheme] = useState("");
  const [category, setCategory] = useState("");
  const [perks, setPerks] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView style={styles.scrollView}>

            <Text style={styles.modalTitle}>Filter Options</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Online</Text>
              <CheckBox
                value={isOnline}
                onValueChange={setIsOnline}
                tintColors={{ true: '#2196F3', false: '#000' }}
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Theme</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={theme}
                  onValueChange={(itemValue) => setTheme(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Select a theme" value="" />
                  <Picker.Item label="Art & Music" value="art_music" />
                  <Picker.Item label="Athletics" value="athletics" />
                  {/* ... other theme options */}
                </Picker>
              </View>
            </View>

            {/* ... other filter sections (categories, perks, dates) */}

            <TouchableOpacity style={styles.buttonClose} onPress={toggleModal}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "100%",
    maxHeight: "80%",
  },
  scrollView: {
    width: "100%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  picker: {
    width: "100%",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  // ... (other styles remain the same)
});

export default FilterModal;
