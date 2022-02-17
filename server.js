const express = require('express');
// const path = require('path');
const htmlRoute = require('./routes/html')
const apiRoute = require('./routes/api');
const PORT = process.env.PORT || 3001;

const app = express();
// link js and css
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(apiRoute);
app.use(htmlRoute);
// which port your listening on
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);