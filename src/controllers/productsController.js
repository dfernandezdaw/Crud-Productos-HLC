const productsServices = require('../services/productsServices')

const getAllProducts = (req, res, next) => {
  const allProducts = productsServices.getAllProducts()
  if (!allProducts) {
    res.status(404).send('There are no products')
    return
  }
  res.send(allProducts)
}

const insertOneProduct = (req, res, next) => {
  const { name, price } = req.body
  if (!name || !price) {
    res.status(400).send('Missing name or price')
    return
  }
  const newProduct = productsServices.insertOneProduct(name, price)
  if (!newProduct) {
    res.status(400).send('Product not created')
    return
  }
  res.send(newProduct)
}

const getOneProduct = (req, res, next) => {
  const { prod } = req.params
  const oneProduct = productsServices.getOneProduct(prod)
  if (!oneProduct) {
    res.status(404).send('Product not found')
    return
  }
  res.send(oneProduct)
}

const deleteOneProduct = (req, res, next) => {
  const { prod } = req.params
  const oneProduct = productsServices.deleteOneProduct(prod)
  if (!oneProduct) {
    res.status(404).send('Product not found')
    return
  }
  res.send(oneProduct)
}

const updateOneProduct = (req, res, next) => {
  const { prod } = req.params
  const { name, price } = req.body
  if (!name || !price) {
    res.status(400).send('Missing name or price')
    return
  }
  const oneProduct = productsServices.updateOneProduct(prod, name, price)
  if (!oneProduct) {
    res.status(404).send('Product not found')
    return
  }
  res.send(oneProduct)
}

module.exports = {
  getAllProducts,
  insertOneProduct,
  getOneProduct,
  deleteOneProduct,
  updateOneProduct,
}
