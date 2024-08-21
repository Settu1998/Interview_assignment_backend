const express = require('express');

const { 
    getLead,
    UpateLead,
    deleteLead 
 } = require('../controller/LeadController')
const route = express.Router();



route.get('/getlead',getLead)
route.patch('/UpateLead',UpateLead)
route.post('/deleteLead',deleteLead)
module.exports  = route;