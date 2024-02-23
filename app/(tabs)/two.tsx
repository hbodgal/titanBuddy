import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  FlatList,
  Platform,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { List, Card } from "react-native-paper";
import { useData } from "../../store/DataContext";

export default function App() {
  const screenHeight = Dimensions.get("window").height;
  const [searchQuery, setSearchQuery] = useState("");
  const [listVisible, setListVisible] = useState(true);
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapViewRef = useRef(null);

  const { departments } = useData();
  const flatListTop =
    searchQuery === ""
      ? Platform.OS === "ios"
        ? 90
        : 70
      : Platform.OS === "ios"
      ? 140
      : 120;
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setListVisible(query.length > 0); // If there's a query, show the list
  };
  const closeList = () => {
    setListVisible(false);
    Keyboard.dismiss();
  };

  const openList = () => {
    setListVisible(true);
  };

  useEffect(() => {
    userLocation();
  }, []);

  // useEffect(() => {
  //   setFilteredDepartments(departments);
  // }, [departments]);

  useEffect(() => {
    // Update the filtered departments whenever the search query changes
    const filtered = departments.filter(
      (dept) =>
        dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDepartments(filtered);
  }, [searchQuery]);

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // Handle error
      return;
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setSelectedLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const onSelectDepartment = (department) => {
    setSelectedLocation({
      latitude: parseFloat(department.latitude),
      longitude: parseFloat(department.longitude),
      name: department.name,
    });
    mapViewRef.current.animateToRegion({
      latitude: parseFloat(department.latitude),
      longitude: parseFloat(department.longitude),
      latitudeDelta: 0.0052,
      longitudeDelta: 0.0021,
    });
    closeList();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for a location..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={handleSearchChange}
          onFocus={openList}
          onBlur={closeList}
          style={styles.searchBar}
        />
      </View>

      {listVisible && (
        <FlatList
          data={filteredDepartments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => ( 
            <TouchableOpacity
              onPress={() => onSelectDepartment(item)}
              style={styles.departmentItem}
            >
              <View style={styles.departmentContent}>
                <List.Icon icon="pin" style={styles.iconStyle} />
                <Text style={styles.departmentText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          style={[
            styles.flatList,
            { maxHeight: screenHeight / 4, top: flatListTop },
          ]} // Adjust top margin based on whether there's a search query
          keyboardShouldPersistTaps="handled"
        />
      )}

      <MapView
        ref={mapViewRef}
        style={styles.map}
        initialRegion={{
          latitude: 33.8825,
          longitude: -117.8845,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={closeList}
      >
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
            title={selectedLocation.name}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    position: "absolute",
    top: 40,
    zIndex: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  searchBar: {
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  flatList: {
    position: "absolute",
    top: Platform.OS === "ios" ? 90 : 70,
    zIndex: 10,
    width: "100%",
  },
  departmentItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row", // Align icon and text horizontally
    alignItems: "center", // Center items vertically within the row
    elevation: 1,
  },
  departmentContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    marginRight: 10, // Add some spacing between the icon and the text
  },
  departmentText: {
    fontSize: 16,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
