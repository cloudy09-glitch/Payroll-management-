const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/data/password.json', (req, res) => {
    res.sendFile('path/to/password.json');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
