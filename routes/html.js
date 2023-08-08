const express = require('express');
const path = require('path');

const apiRouter = require('./api/notes');
const htmlRouter = require('./notes');

const app = express();

app.get('/notes', (req,res) => res.sendFile(path.join(__dirname, '..public/notes.html')));

app.get('*', (req,res) => res.sendFile(path.join(__dirname, '..public/index.html')));