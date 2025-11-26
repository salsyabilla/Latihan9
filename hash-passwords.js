require('dotenv').config();
const bcrypt = require('bcryptjs');
const db = require('./db'); // ← Sesuaikan dengan nama file config DB Anda

const users = [
  { id: 1, password: '123456' },
  { id: 2, password: 'abcdef' },
  { id: 3, password: 'qwerty' }
];

let completed = 0;

users.forEach(user => {
  const hashed = bcrypt.hashSync(user.password, 10);
  
  db.query('UPDATE users SET password = ? WHERE id = ?', [hashed, user.id], (err) => {
    if (err) {
      console.error(`❌ Error updating user ${user.id}:`, err);
    } else {
      console.log(`✅ User ${user.id} password updated successfully`);
    }
    
    completed++;
    if (completed === users.length) {
      db.end();
      console.log('🎉 All passwords hashed successfully!');
      process.exit();
    }
  });
});