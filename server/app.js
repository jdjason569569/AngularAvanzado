const express = require('express');
const cors = require('cors');
const app = express();


//Midlewares
app.use(cors());
app.use(express.json());


module.exports = app;