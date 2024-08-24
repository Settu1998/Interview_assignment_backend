const db = require("../database/db")
const bcrypt = require('bcrypt')


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

async function login(req, res) {
    try {
      const { username, password } = req.body;
  
      const getuser = await db('user').select('*').where({ username: username }).first();
  
      if (!getuser) {
        return res.send(JSON.stringify({
          code: 400,
          status: "Not found",
          message: "User not found"
        }));
      }

      console.log(getuser.password);
      
  
      // Compare the plain-text password with the hashed password stored in the database
      const compare = await bcrypt.compare(password, getuser.password);
  
      if (!compare) {
        return res.send(JSON.stringify({
          code: 500,
          status: "invalid",
          message: "Invalid password"
        }));
      }
  
      // Optionally, delete the password from the user object before sending it in the response
      delete getuser.password;
  
      return res.send(JSON.stringify({
        code: 200,
        status: "success",
        message: "Login successfully",
        user: getuser
      }));
  
    } catch (error) {
      return res.send(JSON.stringify({
        code: 500,
        status: "error",
        message: error.message
      }));
    }
  }
  

async function register(req,res) {
    try {
        const { name,username,password } = req.body;
    
        console.log(req.body);
         const hasedpassword = await bcrypt.hash(password,10);
     console.log(hasedpassword)
    const verifyemail = await db('user').select('*').where({ username:username  }).first();
    
    if(verifyemail){
        return res.status(400).json({
            message:'this username is already used'
            
        })
    }
    
    
       await db('user').insert({
            name:name,
            username:username,
            password:hasedpassword
        });
    
    return res.status(200).json({
        message:'user created successfully'
    })
    
     } catch (error) {
        return res.status(400).json({
            message:error.message
        })
        
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
    deleteLead,
    register,
    login
}
