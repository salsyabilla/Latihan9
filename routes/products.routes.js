const express = require('express');
const router = express.Router();

const {
  getAll,
  getById,
  create,
  update,
  delete: deleteProduct, // karena "delete" reserved word di JS
} = require('../controllers/products.controller');

const { authBearer } = require('../middleware/auth.middleware.js');

// Bebas akses
router.get('/', getAll);
router.get('/:id', getById);

// Perlu Token
router.post('/', authBearer, create);
router.put('/:id', authBearer, update);
router.delete('/:id', authBearer, deleteProduct);

module.exports = router;
