const ProductModel = require('../model/Products')

class ProductService {
  async testServer(req, res) {
    return res.status(200).json({ message: "Server is On...." });
  }

  saveProduct(req, res) {
    let newProduct = new ProductModel(req.body);
    newProduct.save((err, product) => {
      if (err) {
        res.send(err);
      }
      res.json(product);
    });
  }

  async addProduct(req, res) {
    const createdProduct = await ProductModel.create(req.body);
    return res.status(200).json(createdProduct);
  }

  async findAllProducts(req, res) {
    const products = await ProductModel.find();
    return res.status(200).json(products);
  }

  async findProductById(req, res) {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product)
      return res.status(404).json({ message: "Product does not exist." });
    return res.status(200).json(product);
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      await ProductModel.findByIdAndUpdate(id, req.body)
      return res.status(200).json({ message: 'Product updated!'})
    } catch (err) {
      return res.status(404).json({ message: 'Failed to update product'})
    }
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    const productDeleted = await ProductModel.findByIdAndDelete(id);
    if (!productDeleted)
      return res.status(404).json({ message: "Product does not exists"});
    return res.status(200).json({ message: "Product deleted!" });
  }
}

module.exports = new ProductService();
