const express = require('express');
const db = require('../database/db');
const { 
    updateprofile,
    deleteprofile,
    addshop,
    getshop,
    updateshopadd,
    deleteshop,
    addproducts,
    getproducts
 } = require('../controller/profilecontroller')
const route = express.Router();


route.post('/storeprofile', async(req,res)=> {
    
    try {
        const { name,email,gender,mobile,city,state }= req.body;
        console.log( name,email,gender,mobile,city,state)

        await db('profile').insert({
            name:name,
            email:email,
            gender:gender,
            mobile:mobile,
            city:city,
            state:state
        });

        return res.status(200).json({
            message:'user created successfully'
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
});


route.get('/getprofile', async(req,res) =>{
    try {
        const getprofile = await db('profile').select('*');
        return res.send(JSON.stringify({
            code:200,
            status:"success",
            data:getprofile,
            
        }))
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
})


route.patch('/updateprofile',updateprofile)
route.post('/deleteprofile',deleteprofile)
route.post('/addshop',addshop)
route.get('/getshop',getshop)
route.patch('/updateshopadd',updateshopadd)
route.post('/deleteshop',deleteshop)
route.post('/addproducts',addproducts)
route.get('/getproducts',getproducts)
module.exports  = route;