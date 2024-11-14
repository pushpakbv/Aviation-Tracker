const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flight_id:{
        type:String,
        required:true
    },
    airline:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    fare:{
        type:Number,
        required:true
    },
    duration:{
        // type:TimeRanges,
        type:Number,
        required:true
    }
})


const FlightModel = mongoose.model('FlightModel', flightSchema);
module.exports = FlightModel;