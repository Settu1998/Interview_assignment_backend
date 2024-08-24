const express = require('express');

const { 
    getLead,
    UpateLead,
    deleteLead,
    login,
    register 
 } = require('../controller/LeadController')
const route = express.Router();



route.get('/getlead',getLead)
route.patch('/UpateLead',UpateLead)
route.post('/deleteLead',deleteLead)
route.post('/signin',login)
route.post('/signup',register)
module.exports  = route;