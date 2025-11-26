const Product = require('../models/products.model');

exports.getAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err) {
      console.error('getAll error:', err);
      return res.status(500).send({ error: 'Failed to fetch products' });
    }
    res.send(data);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Product.getById(id, (err, data) => {
    if (err) {
      console.error('getById error:', err);
      return res.status(500).send({ error: 'Failed to fetch product' });
    }

    if (!data || data.length === 0) {
      return res.status(404).send({ message: 'Product not found' });
    }

    res.send(data[0]);
  });
};

exports.create = (req, res) => {
  const body = req.body;
  Product.create(body, (err, result) => {
    if (err) {
      console.error('create error:', err);
      return res.status(500).send({ error: 'Failed to create product' });
    }
    res.status(201).send({
      message: 'Product created successfully',
      id: result.insertId || null
    });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Product.update(id, body, (err, result) => {
    if (err) {
      console.error('update error:', err);
      return res.status(500).send({ error: 'Failed to update product' });
    }
    res.send({
      message: 'Product updated successfully',
      affectedRows: result.affectedRows || 0
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Product.delete(id, (err, result) => {
    if (err) {
      console.error('delete error:', err);
      return res.status(500).send({ error: 'Failed to delete product' });
    }
    res.send({
      message: 'Product deleted successfully',
      affectedRows: result.affectedRows || 0
    });
  });
};
