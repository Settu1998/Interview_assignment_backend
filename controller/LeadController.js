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

module.exports = {
    getLead
}
