const mysql = require('mysql2');

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // biarkan kosong kalau kamu tidak pakai password MySQL di Laragon
  database: 'dbpraktikum8'
});

// Coba koneksi ke database
db.connect(err => {
  if (err) {
    console.error('Koneksi database gagal:', err);
  } else {
    console.log('Terhubung ke database MySQL!');
  }
});

module.exports = db;