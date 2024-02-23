import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // You'd need to install this library
// import EventCard from "../../components/eventCard";
import { useData } from "../../store/DataContext"; // Replace with the actual path to your DataContext
import FilterModal from "../../components/filterModal";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const EventsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const { events, loadEvents } = useData();
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadEvents(currentPage, itemsPerPage); // Load events when the component mounts
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    // Simulate a web service call with a timeout
    setTimeout(() => {
      loadEvents(currentPage, itemsPerPage);
      setIsLoading(false);
    }, 4000); // 2 seconds delay for simulation
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(events.length / itemsPerPage))
      return; // Boundary conditions
    setCurrentPage(newPage);
  };

  const renderPaginatedEvents = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedEvents = events.slice(startIndex, startIndex + itemsPerPage);
    return paginatedEvents.map(renderEventCard);
  };

  const renderPaginationControls = () => (
    <View style={styles.paginationContainer}>
      <TouchableOpacity
        onPress={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={styles.paginationButton}
      >
        <Text
          style={[styles.paginationText, currentPage === 1 && styles.disabled]}
        >
          Previous
        </Text>
      </TouchableOpacity>

      <Text style={styles.paginationText}>{currentPage}</Text>

      <TouchableOpacity
        onPress={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === Math.ceil(events.length / itemsPerPage)}
        style={styles.paginationButton}
      >
        <Text
          style={[
            styles.paginationText,
            currentPage === Math.ceil(events.length / itemsPerPage) &&
              styles.disabled,
          ]}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );

  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };

  const renderEventCard = (event) => (
    <View style={styles.card} key={event.id}>
      <Image source={{ uri: event.image }} style={styles.eventImage} />
      <View style={styles.details}>
        <View style={styles.hostSection}>
          {/* <Image source={{ uri: event.hostLogo }} style={styles.hostLogo} /> */}
          <Text style={styles.hostName}>{event.hostName}</Text>
        </View>
        <Text style={styles.eventTitle}>{event.name}</Text>
        <Text style={styles.dateTime}>
          {event.date} at {event.time}
        </Text>
        <Text style={styles.location}>{event.location}</Text>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Search for events"
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={loadEvents} style={styles.searchButton}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
        {/* Uncomment to use the filter button */}
        {/* <TouchableOpacity onPress={toggleFilterModal} style={styles.filterButton}>
          <Icon name="filter-list" size={24} color="#000" />
        </TouchableOpacity> */}
      </View>
  
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <MaterialIcons name="more-horiz" size={30} color="#fff" />
        </View>
      ) : (
        events.map(renderEventCard)
      )}
  
      <FilterModal
        isVisible={isFilterModalVisible}
        toggleModal={toggleFilterModal}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchButton: {
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    // Add shadows, borders, etc.
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    // Add additional styling for the title
  },
  eventImage: {
    width: "100%", // adjust as needed
    height: 150, // adjust as needed
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  details: {
    padding: 10,
  },
  hostSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  hostLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 15, // if the logo is a circle
  },
  hostName: {
    fontSize: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dateTime: {
    fontSize: 14,
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    marginBottom: 5,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    alignItems: "center",
  },
  paginationButton: {
    marginHorizontal: 20,
  },
  paginationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  disabled: {
    color: "#aaa",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default EventsPage;
