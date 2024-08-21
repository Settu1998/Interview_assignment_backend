const express = require('express');

const { 
    getLead 
 } = require('../controller/LeadController')
const route = express.Router();



route.get('/getlead',getLead)
module.exports  = route;