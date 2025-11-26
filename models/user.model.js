const db = require('./db.config');

// Model User (berisi query dasar)
const User = {
    getAll: callback => {
        db.query('SELECT * FROM users', callback);
    },

    // Delete user by ID
    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id = ?', [id], callback);
    },

    // Get user by email (untuk login)
    findByEmail: (email, callback) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], callback);
    }
};

module.exports = User;
