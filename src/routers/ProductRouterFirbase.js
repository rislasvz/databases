const {Router} = require('express')
const ProductService = require('../service/ProductServiceFirbase')
const router = Router()
/**
 * Check status of server
 */
router.get('/health', ProductService.testServer);
/**
 * Add Products in database
 */
router.post('/', ProductService.addProduct);
/**
 * Get All Products to database
 */
router.get("/", ProductService.findAllProducts);
/**
 * Get Products By id to database
 */
router.get("/:id", ProductService.findProductById);
/**
 * Update Products By id 
 */
router.put('/:id', ProductService.updateProduct);
/**
 * Delete products to database
 */
router.delete('/:id', ProductService.deleteProduct);
module.exports = router
