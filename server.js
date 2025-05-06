const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('products.db');

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-us.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/sell', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sell.html'));
});

app.get('/shopping-cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'shopping-cart.html'));
});

app.listen(port, () => {
   console.log(`API server running at http://localhost:${port}`);
});

