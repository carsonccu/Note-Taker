const router = require('express').Router();
const fs = require('fs');
const path = require('path');
var uniqid = require('uniqid');
const db = require('../db/db.json');
const { readFromFile, readAndAppend } = require('./helpers');


// get req notes
router.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))
    )
        .catch((err) => console.log(err))
});

// router.get("/notes", (req, res) => {
//     const dbRoute = path.join(__dirname, '../db/db.json')
//     console.log(dbRoute)
//     readFromFile(dbRoute)
//         .then((data) => {
//             res.json(JSON.parse(data));
//         }).catch((err) => {
//             console.log(err)
//         })
// })

// get post

router.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    const newnote = {
        title,
        text,
        id: uniqid(),
    };
    readAndAppend(newnote, './db/db.json');
    res.json(newnote);
})

// get delete?

module.exports = router;