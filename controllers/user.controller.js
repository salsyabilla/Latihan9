const User = require('../models/user.model'); // memanggil model

// GET semua user
exports.getAllUsers = (req, res) => {
  User.getAll((err, results) => { // ambil dari models
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET user berdasarkan ID
exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });
    res.json(results[0]);
  });
};

// POST (tambah) user baru
exports.createUser = (req, res) => {
  const newUser = req.body;
  User.create(newUser, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: results.insertId, ...newUser });
  });
};

// PUT (update) user berdasarkan ID
exports.updateUser = (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  User.update(id, updatedUser, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
   if (results.affectedRows === 0) return res.status(404).json({ message: 'User tidak ditemukan'}); i
    res.json({ message: 'User updated successfully' });
  });
};

// DELETE user berdasarkan ID
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.delete(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'User tidak ditemukan'});
    res.json({ message: 'User deleted successfully' });
  });
};
