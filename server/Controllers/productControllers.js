const Product = require("../Models/ProductModel");

module.exports = {

  // Find all products
  findAll: (req, res) => {
    Product.find()
      .then((allProducts) => {
        res.json(allProducts);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create product
  createProduct: (req, res) => {
    Product.create(req.body)
      .then((newProduct) => {
        console.log("Creat success");
        res.json(newProduct);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Find one Product
  findOne: (req, res) => {
    Product.findById(req.params.id)
      .then((oneProduct) => {
        console.log("find one success");
        res.json(oneProduct);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  
  // Update Product
  update: (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedProduct) => {
        console.log("update one success");
        res.json(updatedProduct);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Delete one product
  delete: (req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then((result) => {
        console.log("delete success");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};
