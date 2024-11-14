import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import AddFlight from './AddFlight';
import GetFlight from './GetFlight';
import EditFlight from './EditFlight';

function HomePage() {
  const [flights, setFlights] = useState([]);

  // Fetch flights data when the component mounts
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/flights/');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };
    fetchFlights();
  }, []);

  const handleAddFlight = (newFlight) => {
    setFlights([...flights, newFlight]);
  };

  const handleUpdateFlight = async (updatedFlight) => {
    const updatedFlights = flights.map((flight) => flight._id === updatedFlight._id ? updatedFlight : flight);
    setFlights(updatedFlights);
  };

  const handleDeleteFlight = async (flightId) => {
    try {
      await axios.delete(`http://localhost:3000/api/flights/${flightId}`);
      setFlights(flights.filter((flight) => flight._id !== flightId));
    } catch (error) {
      console.error('Error deleting flight:', error);
    }
  };

  return (
    // <Router>
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Flight Management</h1>
        <nav className="flex justify-center space-x-4 mb-6">
          <Link to="/" className="text-blue-500 hover:underline">Flight List</Link>
          <span>|</span>
          <Link to="/add-flight" className="text-blue-500 hover:underline">Add Flight</Link>
        </nav>

        <Routes>
          <Route path="/" element={<GetFlight flights={flights} onDeleteFlight={handleDeleteFlight} />} />
          <Route path="/add-flight" element={<AddFlight onAddFlight={handleAddFlight} />} />
          <Route path="/edit-flight/:id" element={<EditFlight flights={flights} onUpdateFlight={handleUpdateFlight} />} />
        </Routes>
      </div>
    // </Router>
  );
}

export default HomePage;
