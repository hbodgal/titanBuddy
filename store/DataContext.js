import React, { createContext, useState, useContext } from 'react';
import { getDepartments, getEvents } from '../services/apiServices';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [departments, setDepartments] = useState([]);
    const [events, setEvents] = useState([]); // State to hold all events data
    const [currentPage, setCurrentPage] = useState(1); // state to keep track of current page
    const [eventsPerPage, setEventsPerPage] = useState(10);

    const loadDepartments = async () => {
        try {
            const data = await getDepartments();
            setDepartments(data);
        } catch (error) {
            console.error('Could not load departments:', error);
        }
    };

    const loadEvents = async (page = currentPage) => {
        try {
            const offset = (page - 1) * eventsPerPage;
            const eventsData = await getEvents(offset, eventsPerPage);
            setEvents(eventsData); // Load events for the current page and set them in state
            setCurrentPage(page); // Update current page
        } catch (error) {
            console.error('Could not load events:', error);
        }
    };

    // Function to change page
    const changePage = (page) => {
        loadEvents(page);
    };

    // Optionally, if you need to change the number of events per page
    const setPageSize = (size) => {
        setEventsPerPage(size);
        setCurrentPage(1); // Reset to first page
        loadEvents(1); // Reload events with new page size
    };

    // The provider now provides a function `searchEvents` that returns filtered events instead of setting them in the state
    return (
        <DataContext.Provider value={{ departments, loadDepartments, events, loadEvents, currentPage, changePage, setPageSize, eventsPerPage }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
export default DataProvider;
