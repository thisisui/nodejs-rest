const Product = require("../models/productModel");

// @desc    Gets all Products
// @route   GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

// @desc    Gets Single Products
// @route   GET /api/products/:id
async function getProduct(req, res) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc    Create a Product
// @route   POST /api/products
async function createProduct(req, res) {
  try {
    const product = {
      name: "Test Product",
      description: "New product",
    };

    const newProduct = await Product.create(product);

    res.writeHead(201, { "Content-Type": "application/json" });

    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
