const Product = require('../models/products.model');

exports.getAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err) return res.status(500).send(err);
    res.send(data);
  });
};

exports.getById = (req, res) => {
  Product.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).send(err);

    if (data.length === 0) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.send(data[0]);
  });
};

exports.create = (req, res) => {
  Product.create(req.body, (err, data) => {
    if (err) return res.status(500).send(err);

    res.send({
      message: "Product created successfully",
      data
    });
  });
};

exports.update = (req, res) => {
  Product.update(req.params.id, req.body, (err, data) => {
    if (err) return res.status(500).send(err);

    res.send({
      message: "Product updated successfully",
      data
    });
  });
};

exports.delete = (req, res) => {
  Product.delete(req.params.id, (err, data) => {
    if (err) return res.status(500).send(err);

    res.send({
      message: "Product deleted successfully"
    });
  });
};
