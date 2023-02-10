const express = require('express')
const router = express.Router()
const productsRoutes = require('./productsRoutes')

router.get('/', (req, res, next) => {
  res.send('Hello World')
})

router.use('/products', productsRoutes.router)

module.exports.router = router
