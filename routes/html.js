const app = require('express').Router()
const path = require('path');
// Define routes for landing page and notes page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'notes.html'));
});


module.exports = app;