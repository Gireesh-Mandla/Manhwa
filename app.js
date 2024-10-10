const express = require('express');
const fs = require('fs');
const app = express();

// Endpoint to fetch manhwa data
app.get('/manhwa', (req, res) => {
    fs.readFile('manhwa.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }
        res.send(JSON.parse(data));
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
