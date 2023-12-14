const express = require('express');
const mysql = require('mysql');
const route = express.Router();

app.get('/login', (req, res) => {
    res.sendFile(__dirname, '/login.html');
  });
  
  app.post('/login', (req, res) => {
    const { email, senha } = req.body;
  });
  
module.exports = route

