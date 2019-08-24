const express = require('express');
const routerIndex  = express.Router();


/* GET home page */
routerIndex.get('/', (req, res, next) => {
  res.render('index');
});



module.exports = routerIndex;
