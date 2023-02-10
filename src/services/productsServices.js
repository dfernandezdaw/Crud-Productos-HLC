const productsModel = require('../database/productsModel')
const { v4: uuidv4 } = require('uuid')

const getAllProducts = () => {
  const products = productsModel.getAllProducts()
  return products
}

const insertOneProduct = (name, price) => {
  const id = uuidv4()
  const registeredDate = new Date().toLocaleString()

  const expirationDate = new Date(
    new Date().setFullYear(new Date().getFullYear() + 2)
  ).toLocaleString()

  name = name.toLowerCase()

  const newProduct = {
    id,
    name,
    price,
    registeredDate,
    expirationDate,
  }

  // Check if product already exists
  if (productsModel.getOneProduct(newProduct.name)) {
    return false
  }

  const product = productsModel.insertOneProduct(newProduct)

  return product
}

const getOneProduct = name => {
  const product = productsModel.getOneProduct(name)
  return product
}

const deleteOneProduct = name => {
  const product = productsModel.deleteOneProduct(name)
  return product
}

const updateOneProduct = (name, newName, newPrice) => {
  const product = productsModel.updateOneProduct(name, newName, newPrice)
  return product
}

module.exports = {
  getAllProducts,
  insertOneProduct,
  getOneProduct,
  deleteOneProduct,
  updateOneProduct,
}
