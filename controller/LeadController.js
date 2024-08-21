const db = require("../database/db")

async function getLead(req,res) {
    try {
        const fetchdata = await db('team_lead').select('*');
        return res.send(JSON.stringify({
            code:200,
            status:"success",
            message:fetchdata
        }))

    } catch (error) {
        return res.send(JSON.stringify({
            code:500,
            status:"error",
            message:error.message
        })) 
    }
}


async function UpateLead(req,res) {
    try {

        const { id,email,mobile,product,name } = req.body
           console.log(req.body);
           
        await db('team_lead').update({
            name:name,
            email:email,
            number:mobile,
            product:product
        }).where({id:id});
        return res.send(JSON.stringify({
            code:200,
            status:"success",
            message:"Updated team lead successfully"
        }))

    } catch (error) {
        return res.send(JSON.stringify({
            code:500,
            status:"error",
            message:error.message
        })) 
    }
}

async function deleteLead(req,res) {
    try {

        const { id } = req.body

        await db('team_lead').delete().where({id:id});
        return res.send(JSON.stringify({
            code:200,
            status:"success",
            message:"Delete lead successfully"
        }))

    } catch (error) {
        return res.send(JSON.stringify({
            code:500,
            status:"error",
            message:error.message
        })) 
    }
}

module.exports = {
    getLead,
    UpateLead,
    deleteLead
}
