const express = require('express')
const path = require('path')
const databaseConnection = require('../config/database')
const productsRoutes = require('./routes/productsRoutes')

// Inicializar express
const app = express()

// Conectarnos a la DB
databaseConnection.connect()

// Configurations
app.set("views", path.join(__dirname, "views"))
app.set("view engine", ".ejs")

// Routes
app.use('/products', productsRoutes)

app.listen(4000, ()=>{
    console.log('Servidor corriendo en puerto 4000')
})