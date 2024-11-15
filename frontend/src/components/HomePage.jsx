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
    <div className="bg-custom-light-blue">
      <div className="max-w-4xl min-h-96 mx-auto p-6 bg-custom-inner-blue rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Flight Management</h1>
        <nav className="flex justify-center space-x-4 mb-6">
          
          {/* <Link to="/add-flight" className="text-blue-500 hover:underline">Add Flight</Link> */}
          <Link to={`/add-flight`}>
          <button type="submit"
          className="w-28 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >Add Flight</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<GetFlight flights={flights} onDeleteFlight={handleDeleteFlight} />} />
          <Route path="/add-flight" element={<AddFlight onAddFlight={handleAddFlight} />} />
          <Route path="/edit-flight/:id" element={<EditFlight flights={flights} onUpdateFlight={handleUpdateFlight} />} />
        </Routes>
      </div >
      </div>
    // </Router>
  );
}

export default HomePage;
