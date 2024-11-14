import React from 'react';
import { Link } from 'react-router-dom';

function GetFlight({ flights, onDeleteFlight }) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <ul className="space-y-4">
        {flights.map((flight) => (
          <li key={flight._id} className="p-4 bg-white shadow-md rounded-lg">
            <p className="text-gray-700"><strong>Flight ID:</strong> {flight.flight_id}</p>
            <p className="text-gray-700"><strong>Airline:</strong> {flight.airline}</p>
            <p className="text-gray-700"><strong>Destination:</strong> {flight.destination}</p>
            <p className="text-gray-700"><strong>Fare:</strong> ${flight.fare}</p>
            <p className="text-gray-700"><strong>Duration:</strong> {flight.duration} mins</p>
            <div className="mt-4 flex space-x-2">
              <Link to={`/edit-flight/${flight._id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => onDeleteFlight(flight._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetFlight;
