const router = require('express').Router();
const fs = require ('fs');
const uniqid = require('uniqid');
const db = require('../db/db.json');
const { readFromFile, writeToFile, readAndAppend } = require('./helpers');


// get req notes

router.get ("/notes", (req, res) =>{
    const dbRoute = path.join(__dirname, '../db/db.json')
    console.log(dbRoute)
    readFromFile(dbRoute)
    .then((data) =>{
        res.json(JSON.parse(data));
    }).catch((err) =>{
        console.log(err)
    })
})