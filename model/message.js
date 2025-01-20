const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    userQuery: { type: String, required: true },
    botResponse: {type:String}
});

const Message = mongoose.model("message", messageSchema);

module.exports = {Message};