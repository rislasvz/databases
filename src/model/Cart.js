const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CartSchema = new Schema({
  id: ObjectId,
  timestamp: {
    type: Date,
    default: new Date(),
  },
  productos: {
    type: Array,
    default: []
  }},{versionKey: false})

const CartModel = mongoose.model("cart", CartSchema);
module.exports = CartModel;
