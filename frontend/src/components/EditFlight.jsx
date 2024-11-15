import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditFlight() {
  const { id } = useParams(); // Get the flight ID from the URL params
  const navigate = useNavigate();

  // Initialize the state with empty strings
  const [flightId, setFlightId] = useState('');
  const [airline, setAirline] = useState('');
  const [destination, setDestination] = useState('');
  const [fare, setFare] = useState('');
  const [duration, setDuration] = useState('');

  // Fetch the flight details when component loads
  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/flights/${id}`);
        const flight = response.data;

        // Populate the form with existing flight details
        setFlightId(flight.flight_id);
        setAirline(flight.airline);
        setDestination(flight.destination);
        setFare(flight.fare);
        setDuration(flight.duration);
      } catch (error) {
        console.error('Error fetching flight:', error);
        alert('An error occurred while fetching flight details.');
      }
    };

    fetchFlight();
  }, [id]);

  // Handle form submission to update the flight details
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFlight = {
      flight_id: flightId,
      airline,
      destination,
      fare,
      duration,
    };

    try {
      const response = await axios.put(`http://localhost:3000/api/flights/${id}`, updatedFlight);

      if (response.status === 200) {
        alert('Flight updated successfully!');
        navigate('/'); // Redirect to flight list after updating
      }
    } catch (error) {
      console.error('Error updating flight:', error);
      alert('An error occurred while updating the flight.');
    }
  };

  return (
    <div className="bg-custom-light-blue">
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-custom-inner-blue shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Flight</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Flight ID:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={flightId}
          onChange={(e) => setFlightId(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Airline:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Destination:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Fare:</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={fare}
          onChange={(e) => setFare(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Duration:</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Update Flight
      </button>
    </form>
    </div>
  );
}

export default EditFlight;
