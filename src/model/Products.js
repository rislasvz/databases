const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ProductSchema = new Schema({
    id: ObjectId,
    timestamp: {
        type: Date,
        default: new Date()
    },
    descripcion: String,
    codigo: String,
    foto: String,
    precio: Number,
    stock: Number, 
}, {versionKey: false})


const ProductModel = mongoose.model('product', ProductSchema)
module.exports = ProductModel