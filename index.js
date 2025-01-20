const getMessageRoute = require(".//route/getMessage");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = require("./db");

connection();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/message/:userMessage', getMessageRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
