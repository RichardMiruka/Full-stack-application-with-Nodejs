const express = require('express');
const fs = require('fs'); // Import the fs module

const app = express();

app.get('/', (request, response) => {
    fs.readFile('/home.html', 'utf8', (err, html) => { // Use fs.readFile instead of readFile

        if (err) {
            response.status(500).send('sorry, out of order');
        }

        response.send(html);
    });

});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));
