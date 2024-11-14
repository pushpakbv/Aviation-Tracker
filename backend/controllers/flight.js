const FlightModel = require('../models/flight');
exports.getAllItems = async (req, res) => {
    try {
        const flightmodel = await FlightModel.find();
        res.status(200).json(flightmodel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getItemById = async (req, res) => {
    try {
        const flightmodel = await FlightModel.findById(req.params.id);
        if (!flightmodel) return res.status(404).json({ message: "Item not found" });
        res.status(200).json(flightmodel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// app.post('/upload',upload.single("profileImage"),(req,res)=>{
//     console.log(req.body); //no text field -> Null
//     console.log(req.file);

//     return res.redirect("/");
// })


exports.createItem = async (req, res) => {
    try {

        const flightmodel = new FlightModel(req.body);
        const savedItem = await flightmodel.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await FlightModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Item not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await FlightModel.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Item not found" });
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};