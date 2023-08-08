const router = require('express').Router();
const fs = require('fs');

// GET /notes should return the notes.html file.
router.get('/notes', (req, res) => {
  const dbData = require('../db/db.json');
  res.json(dbData);
});

// POST Route for submitting note
router.post('/notes', (req, res) => {
  //const newNote = req.body;
  // log req.body to see what is being sent
  console.log(req.body)


  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    const dbData = require('../db/db.json');
    // Variable for the object we will save
    const newNote= {
      title,
      text,
      id: dbData[dbData.length - 1].id + 1 
    };
    
    
    dbData.push(newNote);

   
    fs.writeFile('./db/db.json', JSON.stringify(dbData), (err) => 
      err 
        ? console.error(err)
        : console.log(
          'Note has been added'
        )
    );

    const response = {
      status: 'success',
      body: newNote,
    };
    console
    res.json(response);
  } else {
    res.json('Error in posting');
  }
});

module.exports = router;
