const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const flightRoute = require('./routes/flight');
const cors = require('cors');

// Allow multiple origins
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	}
};

// Apply CORS middleware before any routes
app.use(cors(corsOptions));

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.use('/api/flights', flightRoute);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
	.then(() => console.log("MongoDB Connected"))
	.catch((e) => console.log("MongoDB connection error:", e));

// Start the server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
