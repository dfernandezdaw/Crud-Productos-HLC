const data = require('./products.json')
const fs = require('fs')

const getAllProducts = () => {
  return data.products
}

const getOneProduct = name => {
  return data.products[name]
}

const insertOneProduct = product => {
  data.products[product.name] = product

  // Write product to json file
  fs.writeFile(
    './src/database/products.json',
    JSON.stringify(data, null, 2),
    'utf8',
    err => {
      throw new Error('Error writing to file')
    }
  )

  return data.products[product.name]
}

const deleteOneProduct = name => {
  const product = data.products[name]
  delete data.products[name]

  // Delete product from json file
  fs.writeFile(
    './src/database/products.json',
    JSON.stringify(data, null, 2),
    'utf8',
    err => {
      throw new Error('Error writing to file')
    }
  )
  return product
}

const updateOneProduct = (name, newName, newPrice) => {
  const product = data.products[name]
  product.name = newName
  product.price = newPrice
  data.products[name] = product
  // Update product in json file
  fs.writeFile(
    './src/database/products.json',
    JSON.stringify(data, null, 2),
    'utf8',
    err => {
      throw new Error('Error writing to file')
    }
  )
  return product
}

module.exports = {
  getAllProducts,
  getOneProduct,
  insertOneProduct,
  deleteOneProduct,
  updateOneProduct,
}
