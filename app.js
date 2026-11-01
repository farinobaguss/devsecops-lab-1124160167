const express = require('express');
const mysql = require('mysql');
const app = express();

const API_SECRET_KEY = "SUPER_SECRET_KEY_12345!";

app.get('/user', (req, res) => {
    let userId = req.query.id;
    let query = "SELECT * FROM users WHERE id = " + userId;
    db.query(query, (err, result) => {
        res.send(result);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
