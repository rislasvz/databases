const CartModel = require("../model/Cart");
const productModel = require('../model/Products');

class CartService {
  
  async testServer(req, res) {
    return res.status(200).json({ message: "Server is On...." });
  }

  async newCart(req, res) {
    try {
      const response = await CartModel.create({ product: [req.body] });
      res.status(200).json({ message: `Carrito id: ${response._id}` });
    } catch (err) {
      res.status(401).json({ message: "Error I Dont Create a Cart" });
    }
  }

  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const response = await CartModel.deleteOne({ _id: id });
      res.status(200).json({ message: `Carrito con id: ${id}, eliminado` });
    } catch (err) {
      res.status(404).json({ message: "I Dont Found Cart" });
    }
  }

  async findAllCart(req, res) {
    try {
      const response = await CartModel.find();
      res.status(200).json(response);
    } catch (err) {
      res.status(404).json({ message: "I Dont Found Cart" });
    }
  }

  async findCartById(req, res) { 
    const { id } = req.params
    try {
      const response = await CartModel.findOne({ _id: id })
      res.status(200).json(response)
    } catch (err) {
      res.status(404).json({ message: "I Dont Exist a Cart" });
    } 
  }
/************************************************************************************************/
  async addProductIncart(req, res) { 
    const { id } = req.params
    const product = await productModel.findOne({_id: id_productos})
    try { 
    const response = await CartModel.updateOne({_id: id}, {$addToSet: {productos: product}})
    res.status(200).json({message: `Producto con id: ${product._id} agregado al carrito ${id}`})
    } catch (err) {
      res.status(404).json({ message: "I Dont add this product in the Cart" });
    }
  }

  async deleteProductIncart(req, res) { 
    const { id, id_productos } = req.params
        try {
          const response = await CartModel.updateOne({_id: id},{$pull: {productos: {_id: id_productos}}})
          res.status(200).json({message: `Producto con id: ${id_productos} eliminado`})
        } catch {
          res.status(404).json({ message: "I Dont exist this product in the Cart" });
        }
  }


}

module.exports = new CartService();
