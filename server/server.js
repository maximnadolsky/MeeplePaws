const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Basic API endpoint
app.get('/', (req, res) => {
  console.log('GET request received');
  res.send('Hello from the server!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});