const db = require('../database/db');

async function updateprofile(req,res) {
    try {
        const { name,email,gender,mobile,city,state,id } = req.body;
        console.log(req.body);

         await db('profile').update({
            name:name,
            email:email,
            gender:gender,
            mobile:mobile,
            city:city,
            state:state
         }).where({ id:id })

        return res.send(JSON.stringify({
            code:200,
            status:'success',
            message:'profile data update successfully'
        }))
    } catch (error) {
        return res.send(JSON.stringify({
            code:500,
            status:'error',
            message:error.message
        }))
    }
}

async function deleteprofile(req,res){
    try {
        const { id } = req.body;
        console.log(req.body)
        
await db('profile').delete().where({ id:id });

        return res.send(JSON.stringify({
            code:200,
            status:'success',
            message:'profile data delete successfully',
            id:id
        }))
    } catch (error) {
        return res.send(JSON.stringify({
            code:500,
            status:'error',
            message:error.message
        }))
    }
}


async function deleteshop(req,res) {
    try {
        const {id} = req.body;
console.log(req.body)

await db('shop_add').delete().where({id:id})

return res.send(JSON.stringify({
    code:200,
    status:'success',
    message:'shop data delete successfully',
    id:id
}))
    } catch (error) {
        return res.send(JSON.stringify({
            code:500,
            status:'error',
            message:error.message
        }))
    }
}


async function addshop(req,res){
    try {
        const {id,shop_name,shop_email,shop_address,shop_gst,shop_mobile}= req.body
        console.log(req.body)
        await db('shop_add').insert({
        shop_name:shop_name,
        shop_email: shop_email,
        shop_mobile: shop_mobile,
        shop_address:shop_address ,
        shop_gst: shop_gst,
        user_id: id
        })
        return res.send(JSON.stringify({
            code:200,
            status:'success',
            message:'shop add successfully',
        }))
    } catch (error) {
        
        return res.send(JSON.stringify({
            code:500,
            status:'error',
            message:error.message
        }))
    }
} 


async function getshop(req,res){
    try {
       const getshop = await db('shop_add').select('*')
        return res.send(JSON.stringify({
            code:200,
            status:"success",
            message:getshop
        }))
    } catch (error) {
        
        return res.send(JSON.stringify({
            code:500,
            status:'error',
            message:error.message
        }))
    }
} 

async function updateshopadd(req,res) {
    try {
      const   { shop_name, shop_mobile,shop_email,shop_address,shop_gst,id} = req.body;
      
       delete req.body.id;
       console.log(req.body)
      await db('shop_add').update(req.body).where({ id:id })
         
      return res.send(JSON.stringify({
        code:200,
        status:"success",
        message:"Shopadd updated successfully"
    }))


    } catch (error) {
        return res.send(JSON.stringify({
            code:500,
            status:'error',
            message:error.message
        }))
    }
}

async function addproducts(req,res) {
    try {
       const {id, shop_id, productName,productPrice,productQuantity,product_id,productDescription} = req.body
      

       await db('products').insert({
        product_name: productName,
        product_price: productPrice,
        product_quantity: productQuantity,
        product_id: '567hbbh',
        product_description: productDescription,
        

})
return res.send(JSON.stringify({
    code:200,
    status:'success',
    message:'products add successfully'
}))
    } catch (error) {

        return res.send(JSON.stringify({
            code:500,
            status:'error',
            message:error.message
        }))
        
    }
    
}

async function getproducts(req,res) {
    try {
        

    const getproducts = await db.raw(`SELECT * FROM products ORDER BY id desc`);
  

        return res.send(JSON.stringify({
            code:200,
            status:'success',
            message:getproducts[0]
        }))

    } catch (error) {
        return res.send(JSON.stringify({
            code:500,
            status:'error',
            message:error.message
        }))
    }
}


async function addLead(req,res){
    try {
        const { name, email, number, product} = req.body
        console.log(req.body)
        await db('leads').insert({
        name: name,
        email: email,
        number: number,
        product: product,
        })
        return res.send(JSON.stringify({
            code:200,
            status:'success',
            message:'lead add successfully',
        }))
    } catch (error) {
        
        return res.send(JSON.stringify({
            code:500,
            status:'error',
            message:error.message
        }))
    
}
}

module.exports = {
    updateprofile,
    deleteprofile,
    addshop,
    getshop,
    updateshopadd,
    deleteshop,
    addproducts,
    getproducts
}

