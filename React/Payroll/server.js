const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/data', async (req, res) => {
    try {
        // Make a request to the Cobol backend
        const response = await axios.get('http://localhost:3000/data');
        res.sendFile(__dirname + '/index.html');
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

