import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddFlight({ onAddFlight }) {
  const [flightId, setFlightId] = useState('');
  const [airline, setAirline] = useState('');
  const [destination, setDestination] = useState('');
  const [fare, setFare] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFlight = {
      flight_id: flightId,
      airline: airline,
      destination: destination,
      fare: fare,
      duration: duration,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/flights/', newFlight);

      if (response.status === 201) {
        // onAddFlight(response.data); // Update the parent component if needed
        setFlightId('');
        setAirline('');
        setDestination('');
        setFare('');
        setDuration('');
        navigate('/');
      }
    }catch (error) {
      console.error("Error adding flight:", error.response ? error.response.data : error.message);
      alert("An error occurred while adding the flight.");
    }
    
  };

  return (
    <div className="bg-custom-light-blue">
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-custom-inner-blue shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Flight</h2>
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
        Add Flight
      </button>
    </form>
    </div>
  );
}

export default AddFlight;
