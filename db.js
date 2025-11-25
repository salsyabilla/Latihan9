const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // ubah kalau MySQL kamu pakai user lain
  password: '',        // isi kalau ada password MySQL
  database: 'dbpraktikum8'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Gagal terhubung ke database:', err);
  } else {
    console.log('✅ Berhasil terhubung ke database MySQL!');
  }
});

module.exports = db;
