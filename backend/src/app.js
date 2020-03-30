const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// utilizado para retonro do erro das validações feitas na api em Json
app.use(errors);

module.exports = app;