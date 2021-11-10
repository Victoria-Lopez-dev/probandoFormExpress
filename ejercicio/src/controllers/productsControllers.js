const databaseConnection = require("../../config/database")

const getAllProducts = (req, res)=>{
    databaseConnection.query("SELECT * FROM products",(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.render("pages/products",{
                products:data
            })
        }
    })
    
}

const getProductsById = (req, res)=> {
    // res.send('Esto devuelve un solo producto')
    res.render('pages/detailsproduct')
}

const getForm =(req,res)=>{
    res.render("pages/form")
}

const addProd=(req,res)=>{

    const{name, category, price, description, stock}=req.body;
    console.log(req.body)
    res.send("recibido")
    /*databaseConnection.query("INSERT INTO products(name, category, price, description, stock)VALUES(?,?,?,?,?)",[name, category, parseInt(price), description, parseInt(stock)],(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect("pages/products")
        }
    })*/
}

module.exports = {getAllProducts, getProductsById,addProd,getForm}