const express = require("express");
const productsRouter = require('./src/routers/ProductRouter')
const cartRouter = require('./src/routers/CartRouter')
const db = require("./src/database/ConnectionMongoose");
const firebase = require('./src/database/ConnectionFirebase');

const app = express()
const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`))
const database = app.listen(db)
const databaseS = app.listen(firebase)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/productos', productsRouter)
app.use('/api/carrito', cartRouter)

