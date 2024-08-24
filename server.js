const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const db = require('./database/db')
const bcrypt = require('bcrypt')
const profileroute = require('./routes/profile')
const leadroute = require('./routes/lead')
const mysql = require('mysql2');

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true, limit: "50mb" })); // Parse URL-encoded bodies

app.use('/api',leadroute)

app.post('/api/createLead', async(req,res)=>{
    
    try {
       const { email,mobile,product,name } = req.body;
       await db('team_lead').insert({
        name:name,
        email:email,
        number:mobile,
        product:product
       })

       return res.send(JSON.stringify({
        code:200,
        status:"success",
        message:"Create Lead Successfully"
    }))
    } catch (error) {
      
        return res.send(JSON.stringify({
            code:500,
            status:"error",
            message:error.message
        }))
    }
})


db.raw('SELECT 1').then(()=>{
    console.log('mysql database is connected')
}).catch((err)=>{
    console.log(err)
})




app.listen(8001,()=>{
    console.log('Server is running on port http://localhost:8001')
})