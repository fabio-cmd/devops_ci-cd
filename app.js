const express = require('express');
const app = express();
const request = require('supertest');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Projeto Rodando!');
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };