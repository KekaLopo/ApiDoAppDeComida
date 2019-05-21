const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/catergoria-router');
const produtoRouter = require('../routes/produto-router');

//Creating/Summon a Api/Web Server of Express
const app = express();

//Config of parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Conection whit Data Base
mongoose.connect(variables.Database.connection);


//Config Routes
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);


//Exporting  Api
module.exports = app