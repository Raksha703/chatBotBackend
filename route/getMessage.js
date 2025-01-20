const router = require("express").Router();
const { Message } = require("../model/message");

router.get('/api/message/:userMessage', async (req, res) => {
    try {
        const userMessage = req.params.userMessage.trim().toLowerCase();

        const msg = await Message.findOne({ userQuery: userMessage });

        if (msg) {
            res.json({ message: msg.botResponse });
        } else {
            res.status(404).json({ error: `No response found for the query: "${userMessage}"` });
        }
    } catch (error) {
        console.error("Error fetching bot response:", error);
        res.status(500).json({ message: "Internal server error. Please try again later." });
    }
});

module.exports = router;
