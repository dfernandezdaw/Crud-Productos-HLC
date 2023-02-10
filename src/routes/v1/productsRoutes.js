const express = require('express')
const router = express.Router()
const productsController = require('../../controllers/productsController')

// v1/api/products
/* router.get('/', (req, res, next) => {
  res.send('Get all products')
})

router.post('/', (req, res, next) => {
  res.send('Products')
})

router.get('/:prod', (req, res, next) => {
  res.send('Products')
})

router.delete('/:prod', (req, res, next) => {
  res.send('Products')
})

router.put('/:prod', (req, res, next) => {
  res.send('Products')
}) */

router
  .route('/')
  .get(productsController.getAllProducts)
  .post(productsController.insertOneProduct)

router
  .route('/:prod')
  .get(productsController.getOneProduct)
  .delete(productsController.deleteOneProduct)
  .put(productsController.updateOneProduct)

module.exports.router = router
