// Import the model
const UmessagesModel = require('../models/UmessagesModel');

// Get all messages
const getMessage = async (req, res) => {
    try {
        const messages = await UmessagesModel.find({}).sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Create a new message
const createMessage = async (req, res) => {
    console.log("Request body:", req.body); // Log the incoming data
    const { firstname, lastname, companyname, message } = req.body;
    try {
        const newMessage = await UmessagesModel.create({ firstname, lastname, companyname, message });
        console.log("Saved message:", newMessage); // Log the saved data
        res.status(200).json(newMessage);
    } catch (error) {
        console.error("Error:", error.message); // Log the error
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createMessage,
    getMessage
};
