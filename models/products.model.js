const db = require('./db.config');

const Product = {
  getAll: (result) => {
    db.query("SELECT * FROM products", (err, res) => {
      result(err, res);
    });
  },

  getById: (id, result) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], (err, res) => {
      result(err, res);
    });
  },

  create: (data, result) => {
    db.query("INSERT INTO products SET ?", data, (err, res) => {
      result(err, res);
    });
  },

  update: (id, data, result) => {
    db.query("UPDATE products SET ? WHERE id = ?", [data, id], (err, res) => {
      result(err, res);
    });
  },

  delete: (id, result) => {
    db.query("DELETE FROM products WHERE id = ?", [id], (err, res) => {
      result(err, res);
    });
  }
};

module.exports = Product;
