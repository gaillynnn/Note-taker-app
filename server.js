const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for landing page and notes page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});
app.get('/api/notes', (req, res) => {
 fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json(JSON.parse(data));
 });   
  
});
app.post('/api/notes', (req, res) => {
  console.log(req.body); 
});
const express = require('express');
const fs = require('fs');
const uuid = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to add a new note
app.post('/api/notes', (req, res) => {
  // Read existing notes from db.json
  const notes = JSON.parse(fs.readFileSync('db.json'));

  // Generate a unique id for the new note
  const newNoteId = uuid.v4();

  // Create a new note object using data from the request body
  const newNote = {
    id: newNoteId,
    title: req.body.title,
    text: req.body.text
  };

  // Add the new note to the existing list of notes
  notes.push(newNote);

  // Write the updated list of notes back to db.json
  fs.writeFileSync('db.json', JSON.stringify(notes, null, 2));

  res.json(newNote); // Respond with the newly added note
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// API routes for saving and retrieving notes
// Add your API route logic here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});