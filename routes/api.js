const router = require('express').Router();
const fs = require('fs');
const path = require('path');
var uniqid = require('uniqid');
const db = require('../db/db.json');
const { readFromFile, writeToFile, readAndAppend } = require('./helpers');


// // // get req notes
// router.get('/api/notes', (req, res) => {
//     readFromFile('./db/db.json').then((data) =>
//         res.json(JSON.parse(data))
//     )
//         .catch((err) => console.log(err))
// });

// // router.get("api/notes", (req, res) => {
// //     const dbRoute = path.join(__dirname, '../db/db.json')
// //     console.log(dbRoute)
// //     readFromFile(dbRoute)
// //         .then((data) => {
// //             res.json(JSON.parse(data));
// //         }).catch((err) => {
// //             console.log(err)
// //         })
// // })

// // get post

// router.post('/api/notes', (req, res) => {
//     const { title, text } = req.body;
//     const newnote = {
//         title,
//         text,
//         id: uniqid(),
//     };
//     readAndAppend(newnote, './db/db.json');
//     res.json(newnote);
// })
router.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))
    )
        .catch((err) => console.log(err))
});


// POST should receive new note to save on request body, add to db.json file, return new note to client (give each note unique ID using uniqid)
router.post('/api/notes', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // Variable for the object we will save
    const newNote = {
        title,
        text,
        id: uniqid(),
    };
    // }

    //psuedo code: need to store/retrieve 'fs'
    readAndAppend(newNote, './db/db.json');

    //  console.log(req.body);
    res.json(newNote);  // <==== req.body will be a parsed JSON object

})

// get delete?

module.exports = router;