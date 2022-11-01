const {Router} = require('express')
const CartService = require('../service/CartService')
const router = Router()

/**
 * Check status of server
 */
 router.get('/health', CartService.testServer);
 /**
  * Create Cart and get id to cart
  */
 router.post('/', CartService.newCart);
 /**
  * Delete Cart by id
  */
 router.delete('/:id', CartService.deleteById)
 /**
  * View all Cart
  */
 router.get("/", CartService.findAllCart);
 /**
  * Get Cart By id and Products
  */
 router.get("/:id/productos", CartService.findCartById);
 /**
  * Add Products in Cart 
  */
 router.put('/:id/productos/:id_productos', CartService.addProductIncart);
 /**
  * Delete Products in cart by id
  */
 router.delete('/:id/productos/:id_productos', CartService.deleteProductIncart);
 
module.exports = router