// CRUD
// C: Create
// R: Read
// U: Update
// D: Delete

const express = require('express')
const { getAllProducts, getProductsById,addProd,getForm } = require('../controllers/productsControllers')

const productsRoutes = express.Router()

//productsRoutes.get("/", getAllProducts)

productsRoutes.get('/unProducto', getProductsById)
productsRoutes.get("/products", getAllProducts)
productsRoutes.get("/add", getForm)
productsRoutes.post("/add", addProd)


module.exports = productsRoutes