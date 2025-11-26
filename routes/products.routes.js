const express = require('express');
const router = express.Router();

const {
  getAll,
  getById,
  create,
  update,
  delete: deleteProduct, // alias untuk delete
} = require('../controllers/products.controller');

const { authBearer } = require('../middleware/auth.middleware');

// Bebas akses
router.get('/', getAll);
router.get('/:id', getById);

// Perlu Token (middleware sederhana)
router.post('/', authBearer, create);
router.put('/:id', authBearer, update);
router.delete('/:id', authBearer, deleteProduct);

module.exports = router;
