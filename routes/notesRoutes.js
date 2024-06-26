const router = require('express').Router()
const fs = require('fs');
const uuid = require('uuid');


// POST route to add a new note
router.post('/api/notes', (req, res) => {
  // Read existing notes from db.json
  const notes = JSON.parse(fs.readFileSync('db/db.json'));

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
  fs.writeFileSync('db/db.json', JSON.stringify(notes, null, 2));

  res.json(newNote); // Respond with the newly added note
});


router.get('/api/notes', (req, res) => {
  fs.readFile('db/db.json', 'utf8', (err, data) => {
         if (err) {
             console.error(err);
             return;
         }
         res.json(JSON.parse(data));
  });   
   
 });


module.exports = router;