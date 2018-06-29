const express = require('express');
const path = require('path');
const fs = require('fs');

const PATH_FILE_WATCHED = 'target.txt';

const app = express();

app.use(express.static(`${__dirname}/src`));

app.get('/oauthcallback', (req, res) => {

    const message = 'Some message';

    fs.writeFile(PATH_FILE_WATCHED, message, (err) => {

        if (err) throw err;

        const fileUrl = path.join(__dirname, 'src/index.html');
        res.redirect('/');

    });

});

app.get('*', (req, res) => {

    const fileUrl = path.join(__dirname, 'src/index.html');
    res.sendFile(fileUrl);

});

fs.watch(PATH_FILE_WATCHED, () => console.log('file has changed'));
console.log(`Now watching ${PATH_FILE_WATCHED} for changes...`);

app.listen(7000);
console.log('google-people-api-fetch client should be listening at :7000');

