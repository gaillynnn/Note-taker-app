// Require Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Set the port number
const PORT = 3000; // You can set your desired port number here

// Add your route and server setup code below
// Import required modules
const express = require('express');
const app = express();
const PORT = 3000; // Set your desired port number

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Landing Page! <a href="/notes">Go to Notes Page</a>');
});

app.get('/notes', (req, res) => {
    res.send('Notes Page');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});